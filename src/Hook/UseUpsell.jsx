import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxious from './UseAxious';

const UseUpsell = () => {

  const Axious = UseAxious()

    const {data:upsellRate = {} , refetch:upsellRefeth}=useQuery({
        queryKey:['upselling'],
        queryFn:async()=>{
          const result = await Axious.get('/upsell')
          return result.data
        }
      })
      return [upsellRate?.Upsell ,upsellRefeth]
};

export default UseUpsell;