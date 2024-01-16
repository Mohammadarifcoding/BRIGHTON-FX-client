import { useQuery } from '@tanstack/react-query';
import UseAxious from './UseAxious';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UseAdminCheck = () => {
    const Axious = UseAxious();
    const { user } = useContext(AuthContext);

    let value = false;
    if (user?.email) {
        value = true;
    }

    const { data: checking = false , isLoading:gettingTheAdminAcess } = useQuery({
        queryKey: ['AdminCheck', user?.email],
        enabled: value,
        queryFn: async () => {
            const result = await Axious.get(`/admincheck/${user?.email}`);
            return result.data;
        }
    });

    return [checking,gettingTheAdminAcess]
};

export default UseAdminCheck;
