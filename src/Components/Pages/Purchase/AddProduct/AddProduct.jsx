
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import UseCurrency from "../../../../Hook/UseCurrency";
import UseUpsell from './../../../../Hook/UseUpsell';



const AddProduct = ({setPurchaseeData,purchaseData,allTheitem,setAllTheItem}) => {

    const nav = useNavigate()
    const [currency,refetchCurrency] = UseCurrency()
    const [currencyData, setCurrencyData] = useState('TWD');
    const [upsellValue,refetchUpsell] = UseUpsell()
    const [upsellRateUse,setUpsellRateUse] = useState(1)
    const [youSell,setYouSell] = useState(0)
    
    const [Type,setType] = useState('Sell')

    const {data:curenc,refetch} = useQuery({
      queryKey:[`currrency${currencyData}`,currencyData],
      queryFn:async()=>{
       const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyData}&from=GBP&amount=1`,{
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
  
   const handleAdding = ()=>{
    let value = {}
   if(youSell <= 0 ){
     
      return toast('Please give correct amount')
    }
    if(buyCurrency <= 0){
     
     return toast('Please give correct amount')
    }
    if(Type == 'Sell'){
       const currencyMy = youSell
    const currencyTake = buyCurrency
    value = {currencyMy,currencyTake,currencyTakecurrent:'GBP',currencyMycurrent:currencyData,Id:uuidv4(),Rate:curenc?.info?.rate}
    }
    else if(Type == 'Order'){
      const currencyMy = buyCurrency
    const currencyTake = youSell
    value = {currencyMy,currencyTake,currencyTakecurrent:currencyData,currencyMycurrent:'GBP',Id:uuidv4(),Rate:curenc?.info?.rate}
    }
    

    
    console.log(value)


    const localStorageData = JSON.parse(localStorage.getItem('purchase'))
    if(localStorageData){
      if(localStorageData?.length >= 4){
        return toast('Please clear your cart')
      }
      
      const totalData = [...localStorageData , value]
      localStorage.setItem('purchase',JSON.stringify(totalData))
     setAllTheItem([...allTheitem,value])
      console.log([...purchaseData,value])
      setYouSell(0)
      setBuyCurrency(0)
    }
    else{
      const totalData = [value]
      console.log(totalData)
      localStorage.setItem('purchase',JSON.stringify(totalData))
      setAllTheItem([value])
      console.log([value])
      setYouSell(0)
      setBuyCurrency(0)
    }

 
    
   }


const ChangeCurrencyData = (e)=>{
      refetch()
    console.log(e.target.value)
    setCurrencyData(e.target.value)
}

    

const ChangeTheWay = (e)=>{
  if(e.target.value == 'Sell'){
    setUpsellRateUse(1)
  }
  else if(e.target.value == 'Order'){
    setUpsellRateUse(upsellValue)
  }
  setType(e.target.value)

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

              <select value={Type} onChange={ChangeTheWay} className=" mt-2 border-gray-500 w-full border px-2 py-2 rounded-lg outline-gray-500">
                
                  <option value='Sell'>Sell</option>
                  <option value='Order'>Order</option>
                
              </select>
            </div>
            <div className="  w-full">
              <h2 className="text-gray-500 text-lg">Rate</h2>
              <input
              value={((curenc?.info?.rate || 0) * upsellRateUse).toFixed(3)}
                type="text"
                className=" mt-2 w-full border-gray-500 border px-2 py-2 rounded-lg outline-gray-500"
              />
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