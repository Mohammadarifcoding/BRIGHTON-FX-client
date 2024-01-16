import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateProvider = ({children}) => {
   const {user,loading} = useContext(AuthContext)
   const lo = useLocation()
   if(loading){
    return <p>Loading..</p>
   }
   if(user){
    return children
   }
   return <Navigate to="/login" state={{from: lo}} replace></Navigate>
};

export default PrivateProvider;