import Select from "react-select";
import currency from "../../../../../../../public/Data/Currency";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CalculatorTabTwo = () => {
  let NowAmount = 53
  const nav = useNavigate()
  const [currencyData, setCurrencyData] = useState({
    value: "BDT",
    label: "Bangladeshi Taka",
  });

  const [youSell,setYouSell] = useState(0)

  
  // const {data:curenc} = useQuery({
  //   queryKey:['currrency',currencyData.value],
  //   queryFn:async()=>{
  //    const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyData.value}&from=USD&amount=1`,{
  //       headers:
  //       {
  //         apikey:'Y4iiOILEHR2RSoNxWq5O8w0NjWRXP5iU'
  //       }
  //     })
  //     return fetchData.data
  //   }
  // })

  // console.log(NowAmount || 53)

  const [buyCurrency,setBuyCurrency] = useState(0)

  // useEffect(()=>{
   
  //     setBuyCurrency(Math.round(NowAmount * youSell))
   
    
  // },[youSell])

  

 const handleSellamountChange =(e)=>{
          console.log(e.target.value)
          
          setBuyCurrency(e.target.value)
          setYouSell((e.target.value/(NowAmount * 1.025)).toFixed(2))
 }

 const handleyouBuyamountCurrency=(e)=>{
  console.log(e.target.value)
  setYouSell(e.target.value)
  setBuyCurrency(((NowAmount * 1.025)* e.target.value).toFixed(2))
 }

 const handleSelling = ()=>{
  const currencyMy = youSell
  const currencyTake = buyCurrency
  const currentFull = {currencyMy,currencyTake,currencyTakecurrent:'USD',currencyMycurrent:currencyData.value}
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
    console.log(totalData)
    localStorage.setItem('purchase',JSON.stringify(totalData))
    setYouSell(0)
    setBuyCurrency(0)
    nav('/purchase')
  }

 
  
 }



  return (
    <div className="bg-white px-7 py-5">
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
              USD
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
        <h2 className="mt-3 text-lg">1 USD = {((NowAmount ?? 1)*1.025).toFixed(3)} {currencyData.value}</h2>
        <p className="text-[12px] font-normal mt-2">Online rate only - rates in branch will differ</p>
      </div>
      <div className="flex mt-3">
          <button onClick={handleSelling} className="btn w-full">Sell Money</button>
     </div>
    </div>
  );
};

export default CalculatorTabTwo;