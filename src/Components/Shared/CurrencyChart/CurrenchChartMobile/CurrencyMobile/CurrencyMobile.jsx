import React from 'react';
import CurrencyMobileItem from './CurrencyMobileItem/CurrencyMobileItem';

const CurrencyMobile = ({data,num}) => {
    return (
        <div>
            {data.map(item => <CurrencyMobileItem  num={num} item={item}></CurrencyMobileItem>)}
        </div>
    );
};

export default CurrencyMobile;