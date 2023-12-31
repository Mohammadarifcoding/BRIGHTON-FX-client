import React from 'react';
import Container from '../Container/Container';
import { IoIosArrowForward } from 'react-icons/io';

const CurrencyChart = () => {
    return (
        <Container>
            <div className='my-32'>
            <h2 className="text-[#1E4A9A] lg:text-6xl sm:text-2xl text-xl  font-semibold lg:text-start text-center">Find your nearest store</h2> 
             <div className='flex md:items-center justify-between mt-10 bg-[#333333] md:flex-row flex-col px-4 py-5'>
               <h2 className='font-semibold gap-3 text-white text-xl'>Enter a currency name</h2>
               <div className='max-w-[400px] w-full md:mt-0 mt-4'>
                <input placeholder='Enter currency name' type="text" className='max-w-[400px] min-w-[300px] w-full px-3 py-3 focus:outline-none' />
               </div>
            
             </div>
             <div className='flex flex-col'>
                   <div className='bg-gray-100 justify-between items-center px-3 flex  py-5'>
                    <div className='flex gap-5 items-center'>
                    <h2 className="px-3 bg-gray-200 inline py-3 rounded-lg">
                         USD
                     </h2>

                     <h2 className='text-xl'>Euro-EUR</h2>
                    </div>
                    

                    <div className='flex  gap-20'>
                     <div className='flex items-center gap-4'>
                          <h2 className='text-xl'>1.123</h2>  
                          <button className='bg-[#93C94E] hover:bg-[#6c923a] hover:text-white text-xl px-3 py-2 rounded-lg flex items-center gap-2'>CLICK & COLLECT <IoIosArrowForward></IoIosArrowForward>  </button>
                     </div>
                     <div className='flex items-center gap-4'>
                          <h2 className='text-xl'>1.123</h2>  
                          <button className='bg-[#93C94E] hover:bg-[#6c923a] hover:text-white text-xl px-3 py-2 rounded-lg flex items-center gap-2'>CLICK & SELL <IoIosArrowForward></IoIosArrowForward>  </button>
                     </div>


                    </div>


                     
                   </div>
             </div>
            </div>
        </Container>
    );
};

export default CurrencyChart;