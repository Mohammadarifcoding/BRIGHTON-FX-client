import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[{
        path:'/',
        element:<Home></Home>
      }]
    },
  ]);

  export default router