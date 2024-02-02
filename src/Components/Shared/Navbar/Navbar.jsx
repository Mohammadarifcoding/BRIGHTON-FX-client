import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Link, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAdminCheck from '../../../Hook/UseAdminCheck';
import { AuthContext } from '../../../Provider/AuthProvider';
import Container from '../Container/Container';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, OUT } = useContext(AuthContext);
    const [checkingAdminAcess, loadingAdminAcess] = UseAdminCheck();
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        OUT()
            .then((res) => {
                return toast('Log out successfully');
            })
            .catch();
    };

    return (
        <div className=" bg-[#93C94E] relative">
            <Container>
                <div className="flex justify-between py-3 container mx-auto items-center">
                    <Link to={'/'}>
                        <div className="sm:max-w-[300px] max-w-[150px] ">
                            <img className="w-full h-full" src="/Images/logo.png" alt="" />
                        </div>
                    </Link>

                    <div className="lg:flex hidden gap-[12px] list-none lg:text-sm md:text-base xl:text-base text-base  bigScreen-navitem items-center">
                        <NavLink to={'/'} className=" pb-2">
                            <li>Travel Money </li>
                        </NavLink>
                        <NavLink to={'/exchangeRates'} className=" pb-2">
                            <li>Exchange Rates </li>
                        </NavLink>
                        <NavLink to={'https://online.worthingfx.com/'} className=" pb-2">
                            <li>Money Transfers </li>
                        </NavLink>
                        <NavLink to={'/termsCoditition'} className=" pb-2">
                            <li>Terms & Condition </li>
                        </NavLink>
                        <NavLink to={'/privacyPolicy'} className=" pb-2">
                            <li>Privacy & Policy </li>
                        </NavLink>
                        <NavLink to={'/contact'} className=" pb-2">
                            <li>Contact Us </li>
                        </NavLink>
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL || '/Images/user.png'} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">{user?.email}</a>
                                    </li>
                                    {checkingAdminAcess ? (
                                        <li>
                                            <Link to={'/dashboard/Currency'}>Dashboard</Link>
                                        </li>
                                    ) : (
                                        ''
                                    )}

                                    <li>
                                        <a onClick={handleLogout}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to={'/signin'}>
                                <button className="bg-[#4A54A4] hover:bg-[#32396d] px-5 py-3 rounded-xl text-white">Sign In</button>
                            </Link>
                        )}
                    </div>

                    <div className="lg:hidden block">
                        <FaBars onClick={toggleDrawer} className="font-bold text-2xl cursor-pointer" />
                    </div>
                </div>
                <div className="lg:hidden">
                    <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="">
                        <div className="bg-[#4A54A4] w-full h-full">
                            <div className="flex justify-end   ">
                                <div onClick={toggleDrawer} className="px-5 py-4 cursor-pointer hover:bg-black">
                                    <RxCross1 className="text-2xl text-white"></RxCross1>
                                </div>
                            </div>

                            <div className="flex flex-col list-none gap-4 mt-4 text-white">
                                <NavLink to={'/'} className=" pb-2 px-4 border-b border-white">
                                    <li>Travel Money </li>
                                </NavLink>
                                <NavLink to={'/exchangeRates'} className=" pb-2 px-4 border-b border-white">
                                    <li>Exchange Rates </li>
                                </NavLink>
                                <NavLink to={'https://online.worthingfx.com/'} className=" pb-2 px-4 border-b border-white">
                                    <li>Money Transfers </li>
                                </NavLink>
                                <NavLink to={'/termsCoditition'} className=" pb-2 px-4 border-b border-white">
                                    <li>Terms & Condition </li>
                                </NavLink>
                                <NavLink to={'/privacyPolicy'} className=" pb-2 px-4 border-b border-white">
                                    <li>Privacy & Policy </li>
                                </NavLink>
                                <NavLink to={'/contact'} className=" pb-2 px-4 border-b border-white">
                                    <li>Contact Us </li>
                                </NavLink>
                                {user ? (
                                    <div className="dropdown text-black dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || '/Images/user.png'} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <a className="justify-between">{user?.email}</a>
                                            </li>
                                            {checkingAdminAcess ? (
                                                <li>
                                                    <Link to={'/dashboard/Currency'}>Dashboard</Link>
                                                </li>
                                            ) : (
                                                ''
                                            )}
                                            <li>
                                                <a onClick={handleLogout}>Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <Link to={'/signin'} className="block border-b border-white">
                                        <button className="bg-[#4A54A4] hover:bg-[#32396d]  px-4 pb-2  text-white">Sign In</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </Drawer>
                </div>
                <ToastContainer></ToastContainer>
            </Container>
        </div>
    );
};

export default Navbar;
