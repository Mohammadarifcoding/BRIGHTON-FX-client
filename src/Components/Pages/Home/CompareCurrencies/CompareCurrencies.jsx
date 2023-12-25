import React from 'react';
import Container from '../../../Shared/Container/Container';

const CompareCurrencies = () => {
  const data = [
    {
      currency:509.72 ,
      place:'BRIGHTON FX'
    },
    {
      currency:507.28,
      place:'Tesko'
    },
    {
      currency:500.45  ,
      place:'Post Office'
    },
    {
      currency:495.41  ,
      place:'Barclays'
    }
  ]
    return (
      <div style={{
        backgroundImage:'url(/Images/currencyBg.jpg)'
      }} className=" bg-cover bg-center min-h-[300px] mt-20 h-full w-full">
          <Container>
            <div className='py-20'>
            <h2 className='lg:text-3xl text-2xl text-[#1E4A9A] font-medium lg:text-start text-center'>Compare our rates</h2>
            <p className='sm:text-base text-sm lg:text-start text-center lg:mt-10 mt-4'>Check today's Euro rate. Discover how many Euros £450 can get you now.</p>
               <div className='grid mt-20  lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-8 '>
                 {data.map((item,ind) => <div className='flex flex-col  justify-center items-center'>
                  <h2 className={`lg:text-3xl sm:text-2xl text-xl ${ind == 0 ? 'font-medium text-[#1E4A9A]':''}  `}>€ {item.currency}</h2>
                     <p className='text-center mt-3 flex justify-center items-center'>{item?.place}</p>
                 </div>)}
               </div>
            </div>
        
          </Container>
            
        </div>
    );
};

export default CompareCurrencies;