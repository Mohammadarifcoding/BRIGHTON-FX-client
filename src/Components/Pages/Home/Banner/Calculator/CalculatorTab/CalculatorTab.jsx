import Select from "react-select";
import currency from "../../../../../../../public/Data/Currency";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CalculatorTab = ({item}) => {
  const [currencyData, setCurrencyData] = useState({
    value: "BDT",
    label: "Bangladeshi Taka",
  });

  const [youSell,setYouSell] = useState('')

  
  const {data:curenc} = useQuery({
    queryKey:['currrency',currencyData.value],
    queryFn:async()=>{
     const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyData.value}&from=USD&amount=1`,{
        headers:
        {
          apikey:'KmKJ3ijUubXdO1syZqfFF7FdMofXWM2u'
        }
      })
      return fetchData.data
    }
  })

  console.log(curenc?.info?.rate || 53)



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
      {
        item == 0 ?  <div className="flex sm:flex-row flex-col justify-between">
        <div className="flex-1">
          <div className="flex flex-col  mt-3  w-ull">
            <h2 className="text-sm">I have</h2>
            <div className="flex  text-[12px] mt-2">
              <h2 className="px-3 bg-gray-200 py-2 rounded-l-lg">
                USD
              </h2>
              <input
                onChange={(e)=>{setYouSell(e.target.value)}}
                value={youSell}
                placeholder="0.0000"
                type="number"
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
              value={(53 * youSell).toFixed(2)}
                placeholder="0.0000"
                type="number"
                className="border sm:max-w-[95px] w-full  px-3 focus:outline-none "
              />
            </div>
          </div>
        </div>
      </div> :  <div className="flex sm:flex-row flex-col justify-between">
        <div className="flex-1">
          <div className="flex flex-col  mt-3  w-ull">
            <h2 className="text-sm">You sell us</h2>
            <div className="flex  text-[12px] mt-2">
              <h2 className="px-3 bg-gray-200 py-2 rounded-l-lg">
                {currencyData.value}
              </h2>
              <input
                placeholder="0.0000"
                type="number"
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
                placeholder="0.0000"
                type="number"
                className="border sm:max-w-[95px] w-full  px-3 focus:outline-none "
              />
            </div>
          </div>
        </div>
      </div>
      }
     
    </div>
  );
};

export default CalculatorTab;
