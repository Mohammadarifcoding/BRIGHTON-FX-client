import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1300px] mx-auto container  lg:px-10 sm:px-6 px-3'>
            {children}
        </div>
    );
};

export default Container;