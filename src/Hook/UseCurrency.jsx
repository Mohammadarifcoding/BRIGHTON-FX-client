import { useQuery } from "@tanstack/react-query";
import UseAxious from "./UseAxious";


const UseCurrency = () => {
   const Axious = UseAxious()
   
   
   const {data:Currency = [] , refetch} = useQuery({
         queryKey:['currency'],
         queryFn:async()=>{
            const currency = await Axious.get('/currency')
            return currency.data
            
         }
   })

   return [Currency,refetch]

};

export default UseCurrency;