import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAxious from '../../../../../Hook/UseAxious';
import UseCurrency from '../../../../../Hook/UseCurrency';
import UseUpsell from '../../../../../Hook/UseUpsell';
import { AuthContext } from '../../../../../Provider/AuthProvider';

const CurrencyItemTable = ({ item }) => {
    const { UpdateCurrencyData, SetUpdateCurrencyData } = useContext(AuthContext);
    const [FetchData, setFetchData] = useState(false);
    const [upsellValue, refetchUpsell] = UseUpsell();
    const Axious = UseAxious();
    const [currency, refetch] = UseCurrency();

    // useEffect(() => {
    //     if (item.value != undefined) {
    //         setFetchData(true);
    //     }
    // }, [item]);

    const {
        data: curenc,
        isLoading: NotGettingCurrency,
        isFetched
    } = useQuery({
        queryKey: [`currrencyUpdate${item?.value}`, UpdateCurrencyData],
        enabled: UpdateCurrencyData,
        queryFn: async () => {
            const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${item.value}&from=GBP&amount=1`, {
                headers: {
                    apikey: 'T2xiIiLGT74lpNubi61MkKWOR0qu2s46'
                }
            });
            const updateData = await Axious.put(`/UpdateCurrencyPrice/${item?.value}`, { Rate: fetchData.data?.info?.rate });
            return updateData.data;
        }
    });

    useEffect(() => {
        if (isFetched) {
            refetch();
            console.log('Refetch the data');
        }
    }, [isFetched]);
    // useEffect(()=>{
    //    if(!NotGettingCurrency){
    //       Axious.put(`/UpdateCurrencyPrice/${item?.value}`,{Rate : curenc?.info?.rate})
    //       .then(res =>{
    //         console.log(res.data)
    //       })
    //    }
    // },[NotGettingCurrency,item.value,Axious,UpdateCurrencyData])

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

            {NotGettingCurrency ? (
                <td className="col-span-3 flex justify-center ">
                    <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
                </td>
            ) : (
                <>
                    <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                        {/* Calculate the increased sell price */}
                        {item?.Rate?.toFixed(4)} GBP -> {/* Use the admin-defined percentage */}
                    </td>
                    <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                        {/* Calculate the increased sell price */}
                        {(item?.Rate * BuyValue)?.toFixed(4)} GBP -> {/* Use the admin-defined percentage */}
                    </td>

                    <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">{(item?.Rate * SellValue)?.toFixed(4)} GBP</td>
                </>
            )}

            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                <Link to={`/dashboard/update/${item?.value}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">Update</button>
                </Link>
            </td>
        </tr>
    );
};

export default CurrencyItemTable;
