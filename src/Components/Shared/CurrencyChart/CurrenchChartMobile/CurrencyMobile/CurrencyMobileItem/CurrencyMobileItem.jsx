import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const CurrencyMobileItem = ({item,num}) => {
    const {data:curenc} = useQuery({
        queryKey:[`currrency${item?.value}`],
        queryFn:async()=>{
         const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${item.value}&from=GBP&amount=1`,{
            headers:
            {
              apikey:'FTMCi9un31A9SYY3OeyG6sIifN9Y1Mu9'
            }
          })
          return fetchData.data
        }
      })
      
  console.log(curenc?.info?.rate)
    return (
        <div className={` bg-gray-100 justify-between items-center px-3 flex  py-5`}>
        <div className="flex gap-3 items-center">
          <h2 className="px-2 text-sm bg-gray-200 inline py-2 rounded-lg">{item?.value}</h2>
        
          <h2 className=" text-sm xl:block hidden">{item?.label}-{item?.value}</h2>
          <div className='flex flex-col'>
          <h2 className=" xl:hidden  text-sm">{item?.label.slice(0,10)}...</h2>
          <h2 className=" w-[100px] lg:text-end">{curenc?.info?.rate.toFixed(3)}</h2>
          </div>

        </div>

        <div className="flex  lg:gap-10 gap-6 xl:gap-20">
            {
                 num == 0 ?  <div className="flex  gap-2 lg:flex-row flex-col lg:items-center">
                
                 <button className="bg-[#93C94E] text-sm hover:bg-[#6c923a] hover:text-white  px-3 py-1 rounded-lg flex items-center gap-2">
                   CLICK & COLLECT <IoIosArrowForward></IoIosArrowForward>{" "}
                 </button>
               </div> : <div className="flex  gap-2 lg:flex-row flex-col lg:items-center ">
           
            <div className='flex justify-end'>
            <button className="bg-[#93C94E] text-sm flex-nowrap  hover:bg-[#6c923a] hover:text-white  px-3 py-1 rounded-lg flex items-center gap-2">
              CLICK & SELL <IoIosArrowForward></IoIosArrowForward>{" "}
            </button>
            </div>
          
          </div> 
            }
         
          
        </div>
      </div>
    );
};

export default CurrencyMobileItem;