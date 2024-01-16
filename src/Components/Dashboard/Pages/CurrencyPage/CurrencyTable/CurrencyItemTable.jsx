import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseUpsell from '../../../../../Hook/UseUpsell';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import UseAxious from '../../../../../Hook/UseAxious';

const CurrencyItemTable = ({ item }) => {
    const {UpdateCurrencyData,SetUpdateCurrencyData} = useContext(AuthContext)
    const [FetchData, setFetchData] = useState(false);
    const [upsellValue, refetchUpsell] = UseUpsell();
    const Axious = UseAxious()

    useEffect(() => {
        if (item.value != undefined) {
            setFetchData(true);
        }
    }, [item]);

        const { data: curenc, isLoading:NotGettingCurrency } = useQuery({
        queryKey: [`currrency${item?.value}`],
        enabled:UpdateCurrencyData,
        queryFn: async () => {
            const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${item.value}&from=GBP&amount=1`, {
                headers: {
                    apikey: 'T2xiIiLGT74lpNubi61MkKWOR0qu2s46'
                }
            });
            return fetchData.data;
        }
    });

    useEffect(()=>{
       if(!NotGettingCurrency){
          Axious.put(`/UpdateCurrencyPrice/${item?.value}`,{Rate : curenc?.info?.rate})
          .then(res =>{
            console.log(res.data)
          })
       }
    },[NotGettingCurrency,item.value,Axious,UpdateCurrencyData])




    // const { data: currency } = useQuery({
    //     queryKey: [`currrency${item?.value}`],
    //     enabled: FetchData,
    //     queryFn: async () => {
    //         const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${item?.value}&from=GBP&amount=1`, {
    //             headers: {
    //                 apikey: 'T2xiIiLGT74lpNubi61MkKWOR0qu2s46'
    //             }
    //         });
    //         return fetchData.data;
    //     }
    // });

    const SellValue = item?.Sell / 100 + 1;
    const BuyValue = item?.Buy / 100 + 1;

    return (
        <tr className="text-start" key={item?.value}>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">{item?.value} -></td>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px] text-start">{item?.label} -></td>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                {/* Calculate the increased sell price */}
                {item?.Rate?.toFixed(3)} GBP -> {/* Use the admin-defined percentage */}
            </td>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                {/* Calculate the increased sell price */}
                {(item?.Rate * SellValue)?.toFixed(3)} GBP -> {/* Use the admin-defined percentage */}
            </td>

            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">{(item?.Rate * BuyValue)?.toFixed(3)} GBP</td>

            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                <Link to={`/dashboard/update/${item?.value}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">Update</button>
                </Link>
            </td>
        </tr>
    );
};

export default CurrencyItemTable;
