import React from 'react';
import UseAxious from './UseAxious';
import { useQuery } from '@tanstack/react-query';

const UseAcceptedOrder = () => {
    const Axious  = UseAxious()


    const {data:AcceptedOrder = [],refetch:RefetchAcceptedOrder} = useQuery({
        queryKey:['AcceptedOrder'],
        queryFn:async()=>{
            const result = await Axious.get('/AcceptedOrder')
          return result.data
        }
    })
    return [AcceptedOrder,RefetchAcceptedOrder]
};

export default UseAcceptedOrder;