import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Components/Pages/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


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


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
     </QueryClientProvider>
  </React.StrictMode>,
)
