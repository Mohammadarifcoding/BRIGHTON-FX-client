import Commitment from "../Commitment/Commitment";
import Features from "../Features/Features";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Commitment></Commitment>
            <Features></Features>
        </div>
    );
};

export default Home;