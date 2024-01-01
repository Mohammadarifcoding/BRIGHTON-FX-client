
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import currency from "../../../../../public/Data/Currency";



const AddProduct = () => {

    const nav = useNavigate()
    
    const [currencyData, setCurrencyData] = useState({
        value: 'TWD'
    });
  
    const [youSell,setYouSell] = useState(0)
  
    
    const {data:curenc,refetch} = useQuery({
      queryKey:['currrency',currencyData.value],
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
            console.log(e.target.value)
            
            setBuyCurrency(e.target.value)
            setYouSell((e.target.value/(curenc?.info?.rate * 1.025)).toFixed(2))
   }
  
   const handleyouBuyamountCurrency=(e)=>{
    console.log(e.target.value)
    setYouSell(e.target.value)
    setBuyCurrency(((curenc?.info?.rate * 1.025)* e.target.value).toFixed(2))
   }
  
//    const handleSelling = ()=>{
//     const currencyMy = youSell
//     const currencyTake = buyCurrency
//     const currentFull = {currencyMy,currencyTake,currencyTakecurrent:'GBP',currencyMycurrent:currencyData.value,Id:uuidv4(),Rate:curenc?.info?.rate}
//     if(currencyMy <= 0 ){
//       nav('/purchase')
//       return toast('Please give correct amount')
//     }
//     if(currencyTake <= 0){
//       nav('/purchase')
//      return toast('Please give correct amount')
//     }
   
//     const localStorageData = JSON.parse(localStorage.getItem('purchase'))
//     if(localStorageData){
//       if(localStorageData?.length >= 4){
//         nav('/purchase')
//         return toast('Please clear your cart')
//       }
      
//       const totalData = [...localStorageData , currentFull]
//       localStorage.setItem('purchase',JSON.stringify(totalData))
//       setYouSell(0)
//       setBuyCurrency(0)
//       nav('/purchase')
//     }
//     else{
//       const totalData = [currentFull]
//       console.log(totalData)
//       localStorage.setItem('purchase',JSON.stringify(totalData))
//       setYouSell(0)
//       setBuyCurrency(0)
//       nav('/purchase')
//     }
  
   
   
    
//    }


const ChangeCurrencyData = (e)=>{
      refetch()
    console.log(e.target.value)
    setCurrencyData({value: e.target.value})
}

    





    return (
        <div className=" lg:mt-20 mt-14">
        <div className="">
          <h2 className="text-[#4A53A4]  font-medium sm:text-2xl text-2xl  ">
            Add Currency{" "}
            <span className="text-gray-400"> (maximum 4 currency)</span>
          </h2>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center mt-10 gap-10">
            <div className="  w-full">
              <h2 className="text-gray-500 text-lg">Total money</h2>
              <input
              onChange={handleyouBuyamountCurrency}
              value={youSell}
                type="text"
                className=" mt-2 w-full border-gray-500 border px-2 py-2 rounded-lg outline-gray-500"
              />
            </div>
            <div className="  w-full">
              <h2 className="text-gray-500 text-lg">Select Currency</h2>

              <select 
               value={currencyData} 
               onChange={ChangeCurrencyData} 
              className=" mt-2 border-gray-500 w-full border px-2 py-2 rounded-lg outline-gray-500">
                {currency.map((item) => (
                  <option value={item.value}>{item.label}</option>
                ))}
              </select>
            </div>
            <div className="  w-full">
              <h2 className="text-gray-500 text-lg">FX Amount</h2>
              <input
                type="text"
                onChange={handleSellamountChange}
                value={buyCurrency}
                className=" mt-2 w-full border-gray-500 border px-2 py-2 rounded-lg outline-gray-500"
              />
            </div>
            <div className="  w-full">
              <h2 className="text-gray-500 text-lg">What to do</h2>

              <select className=" mt-2 border-gray-500 w-full border px-2 py-2 rounded-lg outline-gray-500">
                
                  <option value='Sell'>Sell</option>
                  <option value='Order'>Order</option>
                
              </select>
            </div>
            <div className="  w-full">
              <h2 className="text-gray-500 text-lg">Rate</h2>
              <input
              value={curenc?.info?.rate || 0}
                type="text"
                className=" mt-2 w-full border-gray-500 border px-2 py-2 rounded-lg outline-gray-500"
              />
            </div>
            <div className=" mt-5 flex sm:justify-start justify-end">
              <button  className="flex bg-[#93C94E] px-5 py-3 hover:bg-[#678c36] hover:text-white gap-2">
                Add <span> + </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;