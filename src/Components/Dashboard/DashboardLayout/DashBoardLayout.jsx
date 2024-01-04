import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import Drawer from 'react-modern-drawer'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsCircle } from "react-icons/io5";

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Link, NavLink, Outlet } from 'react-router-dom';
import Container from '../../Shared/Container/Container';

const DashBoardLayout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (

        <>

        <div className='lg:flex hidden  min-h-screen '>
            <div className='lg:w-[22%] bg-[#222D32] fixed top-0 h-full w-full lg:block hidden border-r-[5px] border-[#3e3857]'>

                <div className='px-[20px] mt-16 dashboarItem'>
                    <h2 className='text-white text-center text-xl mb-10'>DashBoard</h2>
                    <NavLink to='/dashboard/Currency'>
                    <button className='flex p-[20px] w-full  text-white gap-3 text-lg font-medium border-b border-white'>Currency</button>
                    </NavLink>
                    <NavLink to='/dashboard/Currency'>
                    <button className='flex p-[20px] w-full  text-white gap-3 text-lg font-medium border-b border-white'>Orders</button>
                    </NavLink>
              
                     <div className="divider divide  text-white">OR</div>
                      <Link to={'/'}>
                      <button className='flex p-[20px] w-full  text-white gap-3 text-lg font-medium border-b border-white'>Home</button>
                      </Link>
              
            
                </div>
            </div>
            <div className='lg:w-[78%] bg-white ml-auto w-full  '>
              <Outlet></Outlet>
            </div>
            
        </div>




        {/* Mobile Dashboard */}

     <div className='flex flex-col lg:hidden'>
       
     <div className="navbar bg-[#222D32] h-[68px] text-white  border-b-[5px] border-[#3e3857]">
    <div onClick={toggleDrawer} className='text-2xl text-white  hover:bg-[#292731] py-3 px-4 rounded-lg'>
   {
    isOpen ? '' : <RxHamburgerMenu  />
   } 
      </div> 
</div>


<div className='min-h-[calc(100vh-68px)] bg-white'>
    <Outlet></Outlet>
</div>



    
     </div>

     <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                
                style={{
                    backgroundColor:'#222D32',
                    
                }}
                className='bg-[#222D32] border-l-4 border-[#3e3857]'
            >
                <div className='px-[20px] mt-16 dashboarItem'>
                <h2 className='text-white text-center text-xl mb-10'>DashBoard</h2>
                    <NavLink to='/dashboard/Currency'>
                    <button className='flex p-[20px] w-full  text-white gap-3 text-lg font-medium border-b border-white'>Currency</button>
                    </NavLink>
                    <NavLink to='/dashboard/Currency'>
                    <button className='flex p-[20px] w-full  text-white gap-3 text-lg font-medium border-b border-white'>Orders</button>
                    </NavLink>
              
                     <div className="divider divide  text-white">OR</div>
                      <Link to={'/'}>
                      <button className='flex p-[20px] w-full  text-white gap-3 text-lg font-medium border-b border-white'>Home</button>
                      </Link>
              
            
                </div>
            </Drawer>

               
        </>
)};

export default DashBoardLayout;