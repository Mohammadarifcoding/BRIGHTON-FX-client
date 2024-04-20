import React from 'react';
import CurrencyChart from '../../Shared/CurrencyChart/CurrencyChart';
import UseCurrency from '../../../Hook/UseCurrency';
import Info from '../../Shared/Info/Info';

const ExchangeRates = () => {
    const [Currecny,refetchCurrency] = UseCurrency()
    return (
        <div>
        <div className="hero min-h-[350px]" style={{ backgroundImage: 'url(/Images/banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">Exchange Rates</h1>                       
                     
                </div>
            </div>
        </div>
       <CurrencyChart currency={Currecny}></CurrencyChart>
       <Info></Info>
    </div>
    );
};

export default ExchangeRates;