import Select from 'react-select';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import UseCurrency from '../../../../../../Hook/UseCurrency';

const CalculatorTabTwo = ({ currencyData, setCurrencyData }) => {
    // let curenc?.info?.rate = 53
    const nav = useNavigate();
    const [currency, refetchCurrency] = UseCurrency();

    const [Rate, setRate] = useState(0);
    const [upsell, setUpsell] = useState(0);
    const [youSell, setYouSell] = useState(0);

    // const { data: curenc } = useQuery({
    //     queryKey: [`currrency${currencyData?.value}`, currencyData.value],
    //     queryFn: async () => {
    //         const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyData.value}&from=GBP&amount=1`, {
    //             headers: {
    //                 apikey: 'T2xiIiLGT74lpNubi61MkKWOR0qu2s46'
    //             }
    //         });
    //         return fetchData.data;
    //     }
    // });

    const [buyCurrency, setBuyCurrency] = useState(0);

    useEffect(() => {
        setRate(0);
        const findCurrency = currency.find((item) => item.value == currencyData.value);
        setRate(parseFloat(findCurrency.Rate));
    }, [currency, currencyData]);

    useEffect(() => {
        const CurrentCurrencySelected = currency.find((item) => item.value == currencyData.value);
        setUpsell(parseFloat(CurrentCurrencySelected.Buy));
    }, [currencyData, currency]);

    const handleSellamountChange = (e) => {
        setBuyCurrency(e.target.value);
        setYouSell((e.target.value / (Rate * (1 + upsell / 100))).toFixed(4));
    };

    const handleyouBuyamountCurrency = (e) => {
        setYouSell(e.target.value);
        setBuyCurrency((Rate * (1 + upsell / 100) * e.target.value).toFixed(4));
    };

    const ChangeTo10Divisible = (num) => {
        let finalNum = 0;
        let NumWord = parseInt(num);
        let extraItem = NumWord % 10;

        if (extraItem != 0) {
            let WillAdd = 10 - extraItem;
            console.log(WillAdd);
            finalNum = NumWord + WillAdd;
        } else {
            finalNum = NumWord;
        }

        return finalNum;
    };

    const ChangeTakeCurrencyFor10Divisible = () => {
      let MyCurrency = ChangeTo10Divisible(buyCurrency);
        let FInalTakeCurrency = MyCurrency / (Rate * (1 + upsell / 100));
        return FInalTakeCurrency.toFixed(4);  
    };

    const handleSelling = () => {
        const currencyMy = youSell;
        const currencyTake = buyCurrency;
        const currentFull = {
            currencyMy: youSell,
            currencyTake:buyCurrency,
            currencyTakecurrent:currencyData.value ,
            currencyMycurrent: 'GBP',
            Id: uuidv4(),
            Rate: (Rate * (1 + upsell / 100)).toFixed(4)
        };
        if (currencyMy <= 0) {
            nav(`/purchase/${currencyData.value}/Sell`);
            return toast('Please give correct amount');
        }
        if (currencyTake <= 0) {
            nav(`/purchase/${currencyData.value}/Sell`);
            return toast('Please give correct amount');
        }

        const localStorageData = JSON.parse(localStorage.getItem('purchase'));
        if (localStorageData) {
            if (localStorageData?.length >= 4) {
                nav(`/purchase/${currencyData.value}/Sell`);
                return toast('Please clear your cart');
            }

            const totalData = [...localStorageData, currentFull];
            localStorage.setItem('purchase', JSON.stringify(totalData));
            setYouSell(0);
            setBuyCurrency(0);
            nav(`/purchase/${currencyData.value}/Sell`);
        } else {
            const totalData = [currentFull];

            localStorage.setItem('purchase', JSON.stringify(totalData));
            setYouSell(0);
            setBuyCurrency(0);
            nav(`/purchase/${currencyData.value}/Sell`);
        }
    };

    return (
        <div className="bg-white px-7 py-5 rounded-b-xl">
            <label className="text-[14px] " htmlFor="Currency">
                Select Currency
            </label>
            <Select
                onChange={(e) => {
                    setCurrencyData(e);
                }}
                value={currencyData}
                className="text-[12px] mt-4"
                options={currency}
            />
            <div className="flex sm:flex-row flex-col justify-between">
                <div className="flex-1">
                    <div className="flex flex-col  mt-3  w-ull">
                        <h2 className="text-sm">You sell us</h2>
                        <div className="flex  text-[12px] mt-2">
                            <h2 className="px-3 bg-gray-200 py-2 rounded-l-lg">{currencyData.value}</h2>
                            <input
                                onChange={handleSellamountChange}
                                value={buyCurrency}
                                placeholder="0.0000"
                                type="number"
                                min="0"
                                className="border sm:max-w-[95px] w-full  px-3 focus:outline-none "
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col  mt-3  w-ull">
                        <h2 className="text-sm">You get</h2>
                        <div className="flex  text-[12px] mt-2">
                            <h2 className="px-3 bg-gray-200 py-2 rounded-l-lg">GBP</h2>
                            <input
                                onChange={handleyouBuyamountCurrency}
                                value={youSell}
                                placeholder="0.0000"
                                type="number"
                                min="0"
                                className="border sm:max-w-[95px] w-full  px-3 focus:outline-none "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 text-center font-semibold">
                <h2 className="text-lg font-medium">Today's Exchange Rate</h2>
                <h2 className="mt-3 text-lg">
                    1 GBP = {((Rate ?? 1) * (1 + upsell / 100)).toFixed(4)} {currencyData.value}
                </h2>
            </div>
            <div className="flex mt-3">
                <button onClick={handleSelling} className="btn w-full">
                    Sell Money
                </button>
            </div>
        </div>
    );
};

export default CalculatorTabTwo;
