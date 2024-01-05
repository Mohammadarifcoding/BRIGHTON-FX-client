import { useQuery } from "@tanstack/react-query";
import UseAxious from "./UseAxious";


const PendingOrder = () => {

   const Axious  = UseAxious()


    const {data:PendingOrder = [],refetch:RefetchPendingOrder} = useQuery({
        queryKey:['PendingOrder'],
        queryFn:async()=>{
            const result = await Axious.get('/PendingOrder')
          return result.data
        }
    })
    return [PendingOrder,RefetchPendingOrder]
};

export default PendingOrder;