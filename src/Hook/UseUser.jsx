import { useQuery } from "@tanstack/react-query";
import UseAxious from "./UseAxious";


const UseUser = () => {
    
   const Axious = UseAxious()


     const {data:Users = [],isLoading,refetch} = useQuery({
        queryKey:['Users'],
        queryFn:async()=>{
            const result = await Axious.get('/allusers')
            return result.data
        }
     })

      return [Users,isLoading,refetch]

};

export default UseUser;