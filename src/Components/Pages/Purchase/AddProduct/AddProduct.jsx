import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import UseCurrency from '../../../../Hook/UseCurrency';
import CurrencyInput from './CurrencyInput';

const AddProduct = ({ setPurchaseeData, purchaseData, allTheitem, setAllTheItem, currencyParams }) => {
    const nav = useNavigate();
    const [currency, refetchCurrency] = UseCurrency();

    const [currencyData, setCurrencyData] = useState('TWD');
    useEffect(() => {
        const newCurrency = currency.find((item) => item.value == currencyParams);
        setCurrencyData(newCurrency.value);
    }, []);
   
    const [youSell, setYouSell] = useState(0);
    const [Rate,setRate] = useState(1)

    const [Type, setType] = useState('Sell');
    const [upvalue,setUpvalue] = useState(1)

    // const { data: curenc, refetch } = useQuery({
    //     queryKey: [`currrency${currencyData}`, currencyData],
    //     queryFn: async () => {
    //         const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyData}&from=GBP&amount=1`, {
    //             headers: {
    //                 apikey: 'T2xiIiLGT74lpNubi61MkKWOR0qu2s46'
    //             }
    //         });
    //         return fetchData.data;
    //     }
    // });

    const [buyCurrency, setBuyCurrency] = useState(0);


     useEffect(()=>{
        const findCurrency = currency.find(item => item.value == currencyData)
        if(Type == 'Sell'){
            setUpvalue(parseFloat(findCurrency.Buy))
        }
        else if(Type == 'Buy'){
            setUpvalue(parseFloat(findCurrency.Sell))
        }
       
     },[Type,currencyData,currency])

    useEffect(()=>{
        setRate(0)
        const findCurrency = currency.find(item => item.value == currencyData)
        setRate(parseFloat(findCurrency.Rate))
    },[currency,currencyData])




    const handleSellamountChange = (e) => {
        const CurrencySelected = currency?.find((item) => item.value == currencyData);
        console.log(CurrencySelected);

        setBuyCurrency(e.target.value);
        setYouSell((e.target.value / (Rate * CurrencySelected.Buy)).toFixed(2));
    };

    const handleyouBuyamountCurrency = (e) => {
        const CurrencySelected = currency?.find((item) => item.value == currencyData);
        console.log(CurrencySelected.Sell);

        setYouSell(e.target.value);
        setBuyCurrency((Rate * CurrencySelected.Sell * e.target.value).toFixed(2));
    };

    const handleAdding = () => {
        let value = {};
        if (youSell <= 0) {
            return toast('Please give correct amount');
        }
        if (buyCurrency <= 0) {
            return toast('Please give correct amount');
        }
        if (Type == 'Sell') {
            const currencyMy = youSell;
            const currencyTake = buyCurrency;
            value = { currencyMy, currencyTake, currencyTakecurrent: 'GBP', currencyMycurrent: currencyData, Id: uuidv4(), Rate: Rate };
        } else if (Type == 'Order') {
            const currencyMy = buyCurrency;
            const currencyTake = youSell;
            value = { currencyMy, currencyTake, currencyTakecurrent: currencyData, currencyMycurrent: 'GBP', Id: uuidv4(), Rate: Rate };
        }

        const localStorageData = JSON.parse(localStorage.getItem('purchase'));
        if (localStorageData) {
            if (localStorageData?.length >= 4) {
                return toast('Please clear your cart');
            }

            const totalData = [...localStorageData, value];
            localStorage.setItem('purchase', JSON.stringify(totalData));
            setAllTheItem([...allTheitem, value]);
            setYouSell(0);
            setBuyCurrency(0);
        } else {
            const totalData = [value];
            localStorage.setItem('purchase', JSON.stringify(totalData));
            setAllTheItem([value]);
            setYouSell(0);
            setBuyCurrency(0);
        }
    };

    const ChangeCurrencyData = (e) => {
        setCurrencyData(e.target.value);
    };



    return (
        <div className=" lg:mt-20 mt-14">
            <div className="">
                <h2 className="text-[#4A53A4]  font-medium sm:text-2xl text-2xl  ">
                    Add Currency <span className="text-gray-400"> (maximum 4 currency)</span>
                </h2>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center mt-10 gap-10">
                    <div className="  w-full">
                        <h2 className="text-gray-500 text-lg">Total money</h2>
                        <input onChange={handleyouBuyamountCurrency} value={youSell} type="text" className=" mt-2 w-full border-gray-500 border px-2 py-2 rounded-lg outline-gray-500" />
                    </div>
                    <div className="  w-full">
                        <h2 className="text-gray-500 text-lg">Select Currency</h2>

                        <select value={currencyData} onChange={ChangeCurrencyData} className=" mt-2 border-gray-500 w-full border px-2 py-2 rounded-lg outline-gray-500">
                            {currency.map((item) => (
                                <CurrencyInput currency={item}></CurrencyInput>
                            ))}
                        </select>
                    </div>
                    <div className="  w-full">
                        <h2 className="text-gray-500 text-lg">FX Amount</h2>
                        <input type="text" onChange={handleSellamountChange} value={buyCurrency} className=" mt-2 w-full border-gray-500 border px-2 py-2 rounded-lg outline-gray-500" />
                    </div>
                    <div className="  w-full">
                        <h2 className="text-gray-500 text-lg">What to do</h2>

                        <select value={Type} onChange={(e)=>{setType(e.target.value)}} className=" mt-2 border-gray-500 w-full border px-2 py-2 rounded-lg outline-gray-500">
                            <option value="Sell">Sell</option>
                            <option value="Order">Order</option>
                        </select>
                    </div>
                    <div className="  w-full">
                        <h2 className="text-gray-500 text-lg">Rate</h2>
                        <input value={((Rate || 1) * (1 + (upvalue / 100))).toFixed(3)} type="text" className=" mt-2 w-full border-gray-500 border px-2 py-2 rounded-lg outline-gray-500" />
                    </div>
                    <div className=" mt-5 flex sm:justify-start justify-end">
                        <button onClick={handleAdding} className="flex bg-[#93C94E] px-5 py-3 hover:bg-[#678c36] hover:text-white gap-2">
                            Add <span> + </span>
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;
