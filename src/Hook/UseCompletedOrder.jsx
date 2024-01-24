import { useQuery } from "@tanstack/react-query";
import UseAxious from "./UseAxious";


const UseCompletedOrder = () => {
    const Axious  = UseAxious()


    const {data:CompletedOrder = [],refetch:RefetchCompletedOrder} = useQuery({
        queryKey:['CompletedOrder'],
        queryFn:async()=>{
            const result = await Axious.get('/completedOrder')
          return result.data
        }
    })
    return [CompletedOrder,RefetchCompletedOrder]
};

export default UseCompletedOrder;