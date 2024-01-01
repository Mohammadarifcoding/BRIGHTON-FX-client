import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../Pages/Home/Home";
import Purchase from "../Pages/Purchase/Purchase";
import TermsCodition from "../Pages/TermsCondition/TermsCodition";
import Contact from "../Pages/Contact/Contact";
import SendMoney from "../Pages/SendMoney/SendMoney";
import TravelMoney from "../Pages/TravelMoney/TravelMoney";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[{
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/purchase',
        element:<Purchase></Purchase>
      },
      {
        path:'/termsCoditition',
        element:<TermsCodition></TermsCodition>
      }
       ,{
        path:'/contact',
        element:<Contact></Contact>
       },
       {
        path:'/sendmony',
        element:<SendMoney></SendMoney>
       },
       {
        path:'/travleMoney',
        element:<TravelMoney></TravelMoney>
       }
    
    ]
    },
  ]);

  export default router