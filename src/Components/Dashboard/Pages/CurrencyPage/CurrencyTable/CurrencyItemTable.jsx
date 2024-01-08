import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UseUpsell from '../../../../../Hook/UseUpsell';
import { Link } from 'react-router-dom';

const CurrencyItemTable = ({ item }) => {
    const [FetchData, setFetchData] = useState(false);
    const [upsellValue, refetchUpsell] = UseUpsell();

    console.log(upsellValue);
    useEffect(() => {
        if (item.value != undefined) {
            setFetchData(true);
        }
    }, [item]);

    const { data: currency } = useQuery({
        queryKey: [`currrency${item?.value}`],
        enabled: FetchData,
        queryFn: async () => {
            const fetchData = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${item?.value}&from=GBP&amount=1`, {
                headers: {
                    apikey: 'FTMCi9un31A9SYY3OeyG6sIifN9Y1Mu9'
                }
            });
            return fetchData.data;
        }
    });

    console.log(upsellValue);

    const SellValue = item?.Sell / 100 + 1;
    const BuyValue = item?.Buy / 100 + 1;

    return (
        <tr className="text-start" key={item?.value}>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">{item?.value} -></td>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px] text-start">{item?.label} -></td>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                {/* Calculate the increased sell price */}
                {(currency?.info?.rate || 1)?.toFixed(3)} GBP -> {/* Use the admin-defined percentage */}
            </td>
            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                {/* Calculate the increased sell price */}
                {(currency?.info?.rate || 1 * SellValue)?.toFixed(3)} GBP -> {/* Use the admin-defined percentage */}
            </td>

            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
              {(currency?.info?.rate|| 1 * BuyValue)?.toFixed(3)} GBP
              </td>

            <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">
                <Link to={`/dashboard/update/${item?.value}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">Update</button>
                </Link>
            </td>
        </tr>
    );
};

export default CurrencyItemTable;
