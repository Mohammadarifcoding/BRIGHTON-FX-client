import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <div className=" bg-[#93C94E] relative">
      <Container>
        <div className="flex justify-between py-3 container mx-auto items-center">
          <Link to={'/'}>
          <div  className="sm:max-w-[300px] max-w-[150px] ">
            <img className="w-full h-full" src="/Images/logo.png" alt="" />
          </div>
          </Link>
         

          <div className="lg:flex hidden gap-[12px] list-none lg:text-sm md:text-base xl:text-base text-base  bigScreen-navitem items-center">
             <NavLink to={'/sendmony'} className=' pb-2'><li>Send Money </li></NavLink>
             <NavLink to={'/exchangeRates'} className=' pb-2'><li>Exchange Rates </li></NavLink>
             <NavLink to={'/travleMoney'} className=' pb-2'><li>Travel Money </li></NavLink>
             <NavLink to={'/termsCoditition'} className=' pb-2'><li>Terms & Condition </li></NavLink>
             <NavLink to={'/contact'} className=' pb-2'><li>Contact Us </li></NavLink>
             <button className="bg-[#4A54A4] hover:bg-[#32396d] px-5 py-3 rounded-xl text-white">Sign In</button>
          </div>

          <div className="lg:hidden block" >
          <FaBars onClick={toggleDrawer} className="font-bold text-2xl cursor-pointer" />
          
          </div>
        </div>
  <div className="lg:hidden">
  <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className=''
            >
                <div className="bg-[#4A54A4] w-full h-full">
                     <div className="flex justify-end   ">
                        <div onClick={toggleDrawer} className="px-5 py-4 cursor-pointer hover:bg-black">
                        <RxCross1 className="text-2xl text-white"></RxCross1>
                        </div>
                         
                     </div>

                     <div className="flex flex-col list-none gap-4 mt-4 text-white">
                     <NavLink to={'/sendmony'} className=' pb-2 px-4 border-b border-white'><li>Send Money </li></NavLink>
             <NavLink to={'/exchangeRates'} className=' pb-2 px-4 border-b border-white' ><li>Exchange Rates </li></NavLink>
             <NavLink to={'/travleMoney'} className=' pb-2 px-4 border-b border-white'><li>Travel Money </li></NavLink>
             <NavLink to={'/termsCoditition'} className=' pb-2 px-4 border-b border-white'><li>Terms & Condition </li></NavLink>
             <NavLink to={'/contact'} className=' pb-2 px-4 border-b border-white'><li>Contact Us </li></NavLink>
             
                     </div>
                </div>
            </Drawer>
  </div>
       
      </Container>
    </div>
  );
};

export default Navbar;
