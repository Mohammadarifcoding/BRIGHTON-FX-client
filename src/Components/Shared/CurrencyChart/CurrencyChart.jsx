import React from 'react';
import Container from '../Container/Container';

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
            </div>
        </Container>
    );
};

export default CurrencyChart;