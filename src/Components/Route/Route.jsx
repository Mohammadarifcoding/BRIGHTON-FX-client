import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../Pages/Home/Home";
import Purchase from "../Pages/Purchase/Purchase";

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
      }
    
    
    ]
    },
  ]);

  export default router