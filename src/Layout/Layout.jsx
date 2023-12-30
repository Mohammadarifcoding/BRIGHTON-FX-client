import { Outlet } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";


const Layout = () => {
    return (
        <div className="overflow-hidden ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;