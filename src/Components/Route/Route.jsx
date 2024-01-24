import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import SecureBox from '../../SecureBox/SecureBox';
import DashBoardLayout from '../Dashboard/DashboardLayout/DashBoardLayout';
import AddCurrency from '../Dashboard/Pages/AddCurrency/AddCurrency';
import CurrencyPage from '../Dashboard/Pages/CurrencyPage/CurrencyPage';
import OrderDetails from '../Dashboard/Pages/OrderDetails/OrderDetails';
import DoneOrders from '../Dashboard/Pages/Orders/DoneOrders';
import Orders from '../Dashboard/Pages/Orders/Orders';
import UpdateCurrency from '../Dashboard/Pages/UpdateCurrency/UpdateCurrency';
import Contact from '../Pages/Contact/Contact';
import ExchangeRates from '../Pages/ExchangeRates/ExchangeRates';
import Home from '../Pages/Home/Home';
import Purchase from '../Pages/Purchase/Purchase';
import SendMoney from '../Pages/SendMoney/SendMoney';
import SignUp from '../Pages/SignUp/SignUp';
import TermsCodition from '../Pages/TermsCondition/TermsCodition';
import TravelMoney from '../Pages/TravelMoney/TravelMoney';

import SignIn from '../Pages/SignIn/SignIn';
import PrivateProvider from './../../Provider/PrivateProvider';
import UserRole from '../Dashboard/Pages/User Role/UserRole';
import Statics from '../Dashboard/Pages/Statics/Statics';
import History from '../Dashboard/Pages/Orders/History';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/purchase/:currencyParams/:currentWay',
                element: <Purchase></Purchase>
            },
            {
                path: '/termsCoditition',
                element: <TermsCodition></TermsCodition>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/sendmony',
                element: <SendMoney></SendMoney>
            },
            {
                path: '/travleMoney',
                element: <TravelMoney></TravelMoney>
            },
            {
                path: '/exchangeRates',
                element: <ExchangeRates></ExchangeRates>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            }
        ]
    },
    {
        path: '/dashboard',
        element: (

                <PrivateProvider><DashBoardLayout></DashBoardLayout></PrivateProvider>

        ),
        children: [
            {
                path: 'Currency',
                element: <CurrencyPage></CurrencyPage>
            },
            {
                path: 'addCurrency',
                element: <AddCurrency></AddCurrency>
            },
            {
                path: 'manageOrders',
                element: <Orders></Orders>
            },
            {
                path: 'orderDetails/:id',
                element: <OrderDetails></OrderDetails>,
                loader: ({ params }) => fetch(`https://brighton-fx-server.vercel.app/details/${params.id}`)
            },
            {
                path: 'activeOrders',
                element: <DoneOrders></DoneOrders>
            },
            {
                path: 'update/:currency',
                element: <UpdateCurrency></UpdateCurrency>,
                loader: ({ params }) => fetch(`https://brighton-fx-server.vercel.app/singleCurrency/${params.currency}`)
            },
            {
                path:'Users',
                element:<UserRole></UserRole>
            },
            {
                path:'Statics',
                element:<Statics></Statics>
            },
            {
                path:'history',
                element:<History></History>
            }
        ]
    },
    {
        path: '/box',
        element: <SecureBox></SecureBox>
    }
]);

export default router;
