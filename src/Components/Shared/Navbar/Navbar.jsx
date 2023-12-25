import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" bg-[#93C94E]">
      <Container>
        <div className="flex justify-between py-3 items-center">
          <div className="sm:max-w-[300px] max-w-[150px] ">
            <img className="w-full h-full" src="/Images/logo.png" alt="" />
          </div>

          <div className="lg:flex hidden gap-[12px] list-none lg:text-sm md:text-base xl:text-base text-base  bigScreen-navitem items-center">
             <NavLink to={'/'} className=' pb-2'><li>Send Money </li></NavLink>
             <NavLink to={'/exchangeRates'} className=' pb-2'><li>Exchange Rates </li></NavLink>
             <NavLink to={'/travleMoney'} className=' pb-2'><li>Travel Money </li></NavLink>
             <NavLink to={'/termsCondition'} className=' pb-2'><li>Terms & Condition </li></NavLink>
             <NavLink to={'/contactUs'} className=' pb-2'><li>Contact Us </li></NavLink>
             <button className="bg-[#4A54A4] hover:bg-[#32396d] px-5 py-3 rounded-xl text-white">Sign In</button>
          </div>

          <div className="lg:hidden">
          <FaBars className="font-bold text-2xl" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
