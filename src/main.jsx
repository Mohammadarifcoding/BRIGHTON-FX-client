import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './Components/Route/Route';
import Authprovider from './Components/Providers/Authprovider';




const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
     </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>,
)
