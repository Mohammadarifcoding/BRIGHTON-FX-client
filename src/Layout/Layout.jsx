import { Outlet } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";


const Layout = () => {
    // const { data: curenc, isLoading:NotGettingCurrency } = useQuery({
    //     queryKey: [`currrency${item?.value}`],
    //     queryFn: async () => {
    //         const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${item.value}&from=GBP&amount=1`, {
    //             headers: {
    //                 apikey: 'T2xiIiLGT74lpNubi61MkKWOR0qu2s46'
    //             }
    //         });
    //         return fetchData.data;
    //     }
    // });

    // useEffect(()=>{
    //    if(!NotGettingCurrency){
    //       Axious.put(`/UpdateCurrencyPrice/${item?.value}`,{Rate : curenc?.info?.rate})
    //       .then(res =>{
    //         console.log(res.data)
    //       })
    //    }
    // },[NotGettingCurrency,item.value,Axious])
    return (
        <div className="overflow-hidden ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;