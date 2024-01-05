import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import { IoIosArrowForward } from "react-icons/io";

import ChartItem from "./ChartItem";
import CurrencyChartMobile from "./CurrenchChartMobile/CurrencyChartMobile";
import { useQuery } from "@tanstack/react-query";
import UseAxious from "../../../Hook/UseAxious";

const CurrencyChart = ({currency}) => {
    const [inputField,setInputField] = useState('')
    const [showAll,setShowAll] = useState(false)
    const Axious = UseAxious()
    const [fullData,setFullData] = useState([...currency])
    const {data:upsellRate = {} , refetch:upsellRefeth}=useQuery({
      queryKey:['upselling'],
      queryFn:async()=>{
        const result = await Axious.get('/upsell')
        return result.data
      }
    })
 

    
    const searchchange = (e)=>{
        setInputField(e.target.value)
        const getNewData = fullData?.filter(item => item.value.includes(inputField.toUpperCase()))
        setFullData(getNewData)

    }

    useEffect(()=>{
     if(inputField == ''){
        setFullData(currency)
     }
 
    },[inputField,currency])
  return (
    <Container>
      <div className="my-32">
        <h2 className="text-[#1E4A9A] lg:text-6xl sm:text-2xl text-xl  font-semibold lg:text-start text-center">
          Find your Currency
        </h2>
        <div className="flex md:items-center justify-between mt-10 bg-[#333333] md:flex-row flex-col px-4 py-5">
          <h2 className="font-semibold gap-3 text-white sm:text-xl text-sm">
            Enter a currency name
          </h2>
          <div className="max-w-[400px]  w-full md:mt-0 mt-4">
            <input
            onChange={searchchange}
            value={inputField}
              placeholder="Enter currency name"
              type="text"
              className="max-w-[400px]  w-full px-3 py-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="md:flex hidden flex-col border ">
            {
                showAll ? 
                fullData?.map((item,ind) => <ChartItem key={ind} value={ind+1} item={item}></ChartItem>) : 
                fullData?.slice(0,12).map((item,ind) => <ChartItem key={ind} value={ind+1} item={item}></ChartItem>)
            }
            
      
        </div>
        <div className="md:hidden block">
            {
                showAll ? <CurrencyChartMobile  data={fullData}></CurrencyChartMobile>:<CurrencyChartMobile data={fullData.slice(0,12)}></CurrencyChartMobile>
            }
               
        </div>

        <div className="flex justify-center mt-5">
            {
                fullData.length > 20 &&  <button onClick={()=>{setShowAll(!showAll)}} className="bg-[#93C94E] hover:bg-[#6c923a] hover:text-white  text-xl px-3 py-2 rounded-lg flex max-w-[160px] items-center gap-2">
                {showAll ? 'Show Less' : 'Show All'} <IoIosArrowForward></IoIosArrowForward>{" "}
               </button>
            }
       
        </div>
        
      </div>
    </Container>
  );
};

export default CurrencyChart;
