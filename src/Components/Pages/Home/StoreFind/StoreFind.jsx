import Container from "../../../Shared/Container/Container";
import { IoIosArrowForward } from "react-icons/io";


const StoreFind = () => {
    return (
        <Container>
            <div className="flex lg:flex-row flex-col  items-center">
              <div>
                 <h2 className="text-[#1E4A9A] lg:text-3xl sm:text-2xl text-xl  font-medium lg:text-start text-center">Find your nearest store</h2>
                 <p className="sm:text-sm text-[13px] max-w-[600px] lg:mt-10 mt-4 flex lg:justify-start justify-center lg:text-start text-center lg:ml-0 lg:mr-auto mx-auto">On the hunt for a currency exchange? Locate your nearest No1 Currency store or agent hassle-free with our store finder.</p>
                 <div className="flex lg:justify-start justify-center lg:mt-10 mt-4">
                             <button className="btn  bg-[#1E4A9A] text-white font-normal rounded hover:bg-[#1D2F51]">Currency Exchange near me <IoIosArrowForward /></button>
                 </div>
              </div>
              <div>
                <img src="/Images/plane2-01.jpg" alt="" />
              </div>
            </div>
        </Container>
    );
};

export default StoreFind;