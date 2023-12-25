

import Banner from "./Banner/Banner";
import Commitment from "./Commitment/Commitment";
import CompareCurrencies from "./CompareCurrencies/CompareCurrencies";
import Features from "./Features/Features";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Commitment></Commitment>
            <Features></Features>
            <CompareCurrencies></CompareCurrencies>
        </div>
    );
};

export default Home;