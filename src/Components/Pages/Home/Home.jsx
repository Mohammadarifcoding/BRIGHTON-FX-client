

import CurrencyChart from "../../Shared/CurrencyChart/CurrencyChart";
import Accordin from "./Accordin/Accordin";
import Banner from "./Banner/Banner";
import Commitment from "./Commitment/Commitment";
import CompareCurrencies from "./CompareCurrencies/CompareCurrencies";
import Download from "./Download/Download";
import Features from "./Features/Features";
import StoreFind from "./StoreFind/StoreFind";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Commitment></Commitment>
            <CurrencyChart></CurrencyChart>
            <Features></Features>
            <StoreFind></StoreFind>
            <CompareCurrencies></CompareCurrencies> 
            <Accordin></Accordin>          
            <Download></Download>
            
        </div>
    );
};

export default Home;