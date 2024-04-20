import { FaArrowRight } from "react-icons/fa6";
import Container from '../Container/Container';

const Info = () => {
    const data = [
       {
        text:'Explore our currency exchange services in Brighton for seamless transactions with foreign currency at cometitive rates',
        
       },
       {
        text:'Discover great travel money exchange rates at 0% commission for our convenience',
        
       },
       {
        text:'Looking for foreign currency near Brighton ? Choose from over 70 currencies at Brighton FX'
       },
       {
        text:'Use our currency converter tool to stay updated on foriegn exchange rates before your travels.'
       },
       {
        text:'Count on us for competitive rates from 70+ currencies to meet all your exchange needs.'
       },
       {
        text:'Brighton FX offers reliable and efficient currency exchange services'
       },
       {
        text:'Locate our nearest bureau de change for convenient currency exchange near you'
       },
       {
        text:'Change money easily with our currency exchange in Brighton '
       }
    ]
    return (
        <Container>
                <div className='bg-[#4A54A4] sm:py-4 py-3 sm:px-6 px-4 text-white'>
                  <h2 className='text-xl font-semibold'>Some Important things you need to know </h2>
                 <div className='flex flex-col mt-7 gap-2'>
                    {
                        data.map((item)=> (
                            <li className='list-none flex  gap-2 items-center'> <FaArrowRight className='text-[#93C94E]'/> {item.text}</li>
                        ))
                    }
                 </div>
                </div>
        </Container>

    );
};

export default Info;