

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
            <Features></Features>
            <CompareCurrencies></CompareCurrencies>
            <StoreFind></StoreFind>
            <Download></Download>
            
        </div>
    );
};

export default Home;