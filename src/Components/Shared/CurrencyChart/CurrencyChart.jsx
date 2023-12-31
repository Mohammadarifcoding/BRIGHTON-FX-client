import React, { useState } from "react";
import Container from "../Container/Container";
import { IoIosArrowForward } from "react-icons/io";
import currency from "../../../../public/Data/Currency";
import ChartItem from "./ChartItem";

const CurrencyChart = () => {
  
    const [showAll,setShowAll] = useState(false)

  return (
    <Container>
      <div className="my-32">
        <h2 className="text-[#1E4A9A] lg:text-6xl sm:text-2xl text-xl  font-semibold lg:text-start text-center">
          Find your nearest store
        </h2>
        <div className="flex md:items-center justify-between mt-10 bg-[#333333] md:flex-row flex-col px-4 py-5">
          <h2 className="font-semibold gap-3 text-white text-xl">
            Enter a currency name
          </h2>
          <div className="max-w-[400px] w-full md:mt-0 mt-4">
            <input
              placeholder="Enter currency name"
              type="text"
              className="max-w-[400px] min-w-[300px] w-full px-3 py-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col border">
            {
                showAll ? 
                currency.map((item,ind) => <ChartItem key={ind} value={ind+1} item={item}></ChartItem>) : 
                currency.slice(0,12).map((item,ind) => <ChartItem key={ind} value={ind+1} item={item}></ChartItem>)
            }
        
      
        </div>
        <div className="flex justify-center mt-5">
        <button onClick={()=>{setShowAll(!showAll)}} className="bg-[#93C94E] hover:bg-[#6c923a] hover:text-white  text-xl px-3 py-2 rounded-lg flex max-w-[160px] items-center gap-2">
             {showAll ? 'Show Less' : 'Show All'} <IoIosArrowForward></IoIosArrowForward>{" "}
            </button>
        </div>
        
      </div>
    </Container>
  );
};

export default CurrencyChart;
