import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import UseAdminCheck from '../Hook/UseAdminCheck';

const PrivateProvider = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [checking, gettingTheAdminAcess] = UseAdminCheck();
    const lo = useLocation();
    if (loading || gettingTheAdminAcess) {
        return (
            <div className='flex justify-center items-center h-[100vh]'>

<div className="w-10 h-10 flex gap-2 items-center justify-center">
                <div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-sky-600"></div>
                <div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-sky-600"></div>
                <div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-sky-600"></div>
            </div>
            </div>
        
        );
    }
    if (user && checking) {
        return children;
    }
    return <Navigate to="/signIn" state={{ from: lo }} replace></Navigate>;
};

export default PrivateProvider;
