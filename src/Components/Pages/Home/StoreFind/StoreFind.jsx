import Container from "../../../Shared/Container/Container";
import { IoIosArrowForward } from "react-icons/io";


const StoreFind = () => {
    return (
      <Container>
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div>
           <h2 className="text-[#1E4A9A] lg:text-6xl sm:text-2xl text-xl  font-semibold lg:text-start text-center">Find your nearest store</h2>
           <p className="sm:text-sm lg:text-[16px] lg:leading-8 max-w-[600px] lg:mt-4 mt-4 flex lg:justify-start justify-center lg:text-start text-center lg:ml-0 lg:mr-auto mx-auto">Explore nearby stores for personalized assistance and support. Connect with us in person to experience tailored service. Find your nearest location for efficient and friendly help with all your currency exchange needs. Your satisfaction is our priority.</p>
           <div className="flex lg:justify-start justify-center lg:mt-10 mt-4">
                       <button className="btn  bg-[#1E4A9A] text-white font-normal rounded hover:bg-[#1D2F51]">Currency Exchange near me <IoIosArrowForward /></button>
           </div>
        </div>
        <div className="flex justify-center items-center ">
          <img className="flex justify-end" src="/Images/plane2-01.jpg" alt="" />
        </div>
      </div>
  </Container>
    );
};

export default StoreFind;