import Select from "react-select";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UseCurrency from "../../../../../../Hook/UseCurrency";

const CalculatorTabTwo = () => {
  // let curenc?.info?.rate = 53
  const nav = useNavigate()
  const [currency,refetchCurrency] = UseCurrency()
  const [currencyData, setCurrencyData] = useState({
    value:'AED',
    label:'United Arab Emirates Dirham'
  });

  const [youSell,setYouSell] = useState(0)

  
  const {data:curenc} = useQuery({
    queryKey:[`currrency${currencyData?.value}`,currencyData.value],
    queryFn:async()=>{
     const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyData.value}&from=GBP&amount=1`,{
        headers:
        {
          apikey:'FTMCi9un31A9SYY3OeyG6sIifN9Y1Mu9'
        }
      })
      return fetchData.data
    }
  })

  const [buyCurrency,setBuyCurrency] = useState(0)

  

 const handleSellamountChange =(e)=>{

          
          setBuyCurrency(e.target.value)
          setYouSell((e.target.value/curenc?.info?.rate).toFixed(2))
 }

 const handleyouBuyamountCurrency=(e)=>{

  setYouSell(e.target.value)
  setBuyCurrency(((curenc?.info?.rate)* e.target.value).toFixed(2))
 }

 const handleSelling = ()=>{
  const currencyMy = youSell
  const currencyTake = buyCurrency
  const currentFull = {currencyMy,currencyTake,currencyTakecurrent:'GBP',currencyMycurrent:currencyData.value,Id:uuidv4(),Rate:curenc?.info?.rate}
  if(currencyMy <= 0 ){
    nav('/purchase')
    return toast('Please give correct amount')
  }
  if(currencyTake <= 0){
    nav('/purchase')
   return toast('Please give correct amount')
  }
 
  const localStorageData = JSON.parse(localStorage.getItem('purchase'))
  if(localStorageData){
    if(localStorageData?.length >= 4){
      nav('/purchase')
      return toast('Please clear your cart')
    }
    
    const totalData = [...localStorageData , currentFull]
    localStorage.setItem('purchase',JSON.stringify(totalData))
    setYouSell(0)
    setBuyCurrency(0)
    nav('/purchase')
  }
  else{
    const totalData = [currentFull]

    localStorage.setItem('purchase',JSON.stringify(totalData))
    setYouSell(0)
    setBuyCurrency(0)
    nav('/purchase')
  }

 
  
 }



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
              <h2 className="px-3 bg-gray-200 py-2 rounded-l-lg">
                {currencyData.value}
              </h2>
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
              <h2 className="px-3 bg-gray-200 py-2 rounded-l-lg">
              GBP
              </h2>
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
        <h2 className="mt-3 text-lg">1 GBP = {(curenc?.info?.rate ?? 1).toFixed(3)} {currencyData.value}</h2>
        
      </div>
      <div className="flex mt-3">
          <button onClick={handleSelling} className="btn w-full">Sell Money</button>
     </div>
    </div>
  );
};

export default CalculatorTabTwo;
