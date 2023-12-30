import { Outlet } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Navbar from "../Components/Shared/Navbar/Navbar";


const Layout = () => {
    return (
        <div className="overflow-hidden ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;