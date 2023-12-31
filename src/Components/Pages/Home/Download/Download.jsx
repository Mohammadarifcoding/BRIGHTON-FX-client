import React from 'react';
import Container from '../../../Shared/Container/Container';

const Download = () => {
    return (
        <Container>

        <div className='bg-[#8CD424] relative justify-between flex gap-32  md:px-12 px-4  py-4 lg:py-12'>
            <div className=''>
            <h2 className='sm:text-3xl text-2xl text-black'>Download Now</h2>
                    <p className='text-gray-800 mt-4 sm:text-base text-sm max-w-[500px]'>Our online channels (Mobile APP and Web Portal) makes it convenient to send money abroad.</p>
                    <div className='flex gap-5 mt-6 flex-wrap'>
                        <img className='max-w-[150px] max-h-[80px]' src="/Images/app-store.png" alt="" />
                        <img className='max-w-[150px] max-h-[80px]' src="/public/Images/google-play-store.png" alt="" />
                    </div>
            </div>
            <div className='lg:block hidden' >
                <div className='relative h-[100px] -top-[98px] w-[290px] m'>
                <img className='w-full' src="/Images/app.png" alt="" />
                </div>
               
            </div>
                   
                </div>
                </Container>
     
    );
};

export default Download;