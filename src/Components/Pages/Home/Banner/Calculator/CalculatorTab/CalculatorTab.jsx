import Select from 'react-select';

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UseCurrency from '../../../../../../Hook/UseCurrency';

const CalculatorTab = () => {
    // let curenc?.info?.rate = 53
    const nav = useNavigate();
    const [currency, refetchCurrency] = UseCurrency();
    const [Rate,setRate] = useState(0)
 
    const [currencyData, setCurrencyData] = useState({
        value: 'AED',
        label: 'United Arab Emirates Dirham'
    });
    
    const [upbuy,setupbuy] = useState(0)

    // const { data: curenc , isLoading:notgettingCurrency } = useQuery({
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
    
    const [youSell, setYouSell] = useState(0);

    const [buyCurrency, setBuyCurrency] = useState(0);


    useEffect(()=>{
        setRate(0)
        const findCurrency = currency.find(item => item.value == currencyData?.value)
        setRate(parseFloat(findCurrency?.Rate))
    },[currency,currencyData])

    useEffect(()=>{
          const CurrentCurrencySelected = currency.find(item => item.value == currencyData.value)
          setupbuy(parseFloat(CurrentCurrencySelected?.Buy))

    },[currencyData,currency])

    const handleSellamountChange = (e) => {
        console.log(e.target.value);
 
        setBuyCurrency(e.target.value);
        setYouSell((e.target.value / (Rate * (1 + (upbuy / 100)))).toFixed(2));
    };

    const handleyouBuyamountCurrency = (e) => {
        console.log(e.target.value);
        setYouSell(e.target.value)
        setBuyCurrency((Rate * (1 + (upbuy / 100)) * e.target.value).toFixed(2));
    };

    const handleBuying = () => {
        const currencyMy = youSell;
        const currencyTake = buyCurrency;
        const currentFull = { currencyMy, currencyTake, currencyMycurrent: 'GBP', currencyTakecurrent: currencyData.value, Id: uuidv4(), Rate: Rate };
        if (currencyMy <= 0) {
            nav(`/purchase/${currencyData.value}/Order`);
            return toast('Please give correct amount');
        }
        if (currencyTake <= 0) {
            nav(`/purchase/${currencyData.value}/Order`);
            return toast('Please give correct amount');
        }

        const localStorageData = JSON.parse(localStorage.getItem('purchase'));
        if (localStorageData) {
            if (localStorageData?.length >= 4) {
                nav(`/purchase/${currencyData.value}/Order`);
                return toast('Please clear your cart');
            }

            const totalData = [...localStorageData, currentFull];
            localStorage.setItem('purchase', JSON.stringify(totalData));
            setYouSell(0);
            setBuyCurrency(0);
            nav(`/purchase/${currencyData.value}/Order`);
        } else {
            const totalData = [currentFull];

            localStorage.setItem('purchase', JSON.stringify(totalData));
            setYouSell(0);
            setBuyCurrency(0);
            nav(`/purchase/${currencyData.value}/Order`);
        }
    };

    return (
        <div className="bg-white px-7 py-5 max-w-[350px] rounded-b-xl">
            <label className="text-[14px] " htmlFor="Currency">
                Select Currency
            </label>
            <Select
                onChange={(e) => {
                    setCurrencyData(e);
                }}
                value={currencyData}
                className="text-[12px] mt-4 w-full max-w-[350px]"
                options={currency}
            />
            <div className="flex sm:flex-row flex-col justify-between">
                <div className="flex-1">
                    <div className="flex flex-col  mt-3  w-ull">
                        <h2 className="text-sm">I have</h2>
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

                <div className="flex-1">
                    <div className="flex flex-col  mt-3  w-ull">
                        <h2 className="text-sm">I want to buy</h2>
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
            </div>

            <div className="mt-5 text-center font-semibold">
                <h2 className="text-lg font-medium">Today's Exchange Rate</h2>

                <h2 className="mt-3 text-lg">
                    {Rate == 0 ?
                     <><div className="w-10 h-10 mx-auto animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div></> :
                     <>1 GBP = {((Rate ?? 1) * (1 + (upbuy / 100))).toFixed(2)} {currencyData.value}</>}

                </h2>
            </div>
            <div onClick={handleBuying} className="flex mt-3">
                <button className="btn w-full">Buy Money</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CalculatorTab;
