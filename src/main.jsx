import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Components/Pages/Home/Home';


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


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
