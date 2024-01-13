import { createContext, useState } from "react";



export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
    const [AdminAcess,setAdminAcess] = useState(false)
       const AuthInfo = {AdminAcess,setAdminAcess}
    return(
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default Authprovider;