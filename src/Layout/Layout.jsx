import Home from "../Components/Pages/Home/Home";
import Navbar from "../Components/Shared/Navbar/Navbar";


const Layout = () => {
    return (
        <div className="overflow-hidden bg-gray-100">
            <Navbar></Navbar>
            <Home></Home>
        </div>
    );
};

export default Layout;