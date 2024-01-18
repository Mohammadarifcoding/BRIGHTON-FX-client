import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import UseAdminCheck from "../Hook/UseAdminCheck";

const PrivateProvider = ({children}) => {
   const {user,loading} = useContext(AuthContext)
   const [checking,gettingTheAdminAcess] = UseAdminCheck()
   const lo = useLocation()
   if(loading || gettingTheAdminAcess){
    return <p>Loading..</p>
   }
   if(user && checking){
    return children
   }
   return <Navigate to="/signIn" state={{from: lo}} replace></Navigate>
};

export default PrivateProvider;