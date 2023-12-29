import Select from "react-select";
import currency from "../../../../../../../public/Data/Currency";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CalculatorTab = () => {
  // let curenc?.info?.rate = 53
  const [currencyData, setCurrencyData] = useState({
    value: "BDT",
    label: "Bangladeshi Taka",
  });
    const {data:curenc} = useQuery({
    queryKey:['currrency',currencyData.value],
    queryFn:async()=>{
     const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyData.value}&from=USD&amount=1`,{
        headers:
        {
          apikey:'FTMCi9un31A9SYY3OeyG6sIifN9Y1Mu9'
        }
      })
      return fetchData.data
    }
  })
  console.log(curenc?.info?.rate)


  const [youSell,setYouSell] = useState(0)

  
  // const {data:curenc} = useQuery({
  //   queryKey:['currrency',currencyData.value],
  //   queryFn:async()=>{
  //    const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyData.value}&from=USD&amount=1`,{
  //       headers:
  //       {
  //         apikey:'KmKJ3ijUubXdO1syZqfFF7FdMofXWM2u'
  //       }
  //     })
  //     return fetchData.data
  //   }
  // })

  // console.log(curenc?.info?.rate || 53)

  const [buyCurrency,setBuyCurrency] = useState(0)

  // useEffect(()=>{
   
  //     setBuyCurrency(Math.round(curenc?.info?.rate * youSell))
   
    
  // },[youSell])

  

 const handleSellamountChange =(e)=>{
          console.log(e.target.value)
          
          setBuyCurrency(e.target.value)
          setYouSell((e.target.value/curenc?.info?.rate).toFixed(2))
 }

 const handleyouBuyamountCurrency=(e)=>{
  console.log(e.target.value)
  setYouSell(e.target.value)
  setBuyCurrency((curenc?.info?.rate * e.target.value).toFixed(2))
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
            <h2 className="text-sm">I have</h2>
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

        <div className="flex-1">
          <div className="flex flex-col  mt-3  w-ull">
            <h2 className="text-sm">I want to buy</h2>
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
      </div> 


      <div className="mt-5 text-center font-semibold">
        <h2 className="text-lg font-medium">Today's Exchange Rate</h2>
        <h2 className="mt-3 text-lg">1 USD = {(curenc?.info?.rate ?? 1).toFixed(3)} {currencyData.value}</h2>
        <p className="text-[12px] font-normal mt-2">Online rate only - rates in branch will differ</p>
      </div>
     <div className="flex mt-3">
          <button className="btn w-full">Buy Money</button>
     </div>
    </div>
  );
};

export default CalculatorTab;
