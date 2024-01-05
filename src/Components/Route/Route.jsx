import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../Pages/Home/Home";
import Purchase from "../Pages/Purchase/Purchase";
import TermsCodition from "../Pages/TermsCondition/TermsCodition";
import Contact from "../Pages/Contact/Contact";
import SendMoney from "../Pages/SendMoney/SendMoney";
import TravelMoney from "../Pages/TravelMoney/TravelMoney";
import ExchangeRates from "../Pages/ExchangeRates/ExchangeRates";
import DashBoardLayout from "../Dashboard/DashboardLayout/DashBoardLayout";
import CurrencyPage from "../Dashboard/Pages/CurrencyPage/CurrencyPage";
import AddCurrency from "../Dashboard/Pages/AddCurrency/AddCurrency";

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
       },
       {
        path:'/exchangeRates',
        element:<ExchangeRates></ExchangeRates>
       }
    
    ]
    },
    {
      path:'/dashboard',
      element:<DashBoardLayout></DashBoardLayout>,
      children:[
        {
          path:'Currency',
          element:<CurrencyPage></CurrencyPage>
        },
        {
          path:'addCurrency',
          element:<AddCurrency></AddCurrency>
        }
      ]
    }
  ]);

  export default router