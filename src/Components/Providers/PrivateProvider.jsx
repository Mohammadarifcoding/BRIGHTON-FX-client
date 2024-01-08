import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateProvider = ({children}) => {
  const {AdminAcess,setAdminAcess} = useContext(AuthContext)
  const lo = useLocation()

  console.log(AdminAcess)
 if(AdminAcess){
    return children
 }
 return <Navigate to="/box" state={{from: lo}} replace></Navigate>
};

export default PrivateProvider;