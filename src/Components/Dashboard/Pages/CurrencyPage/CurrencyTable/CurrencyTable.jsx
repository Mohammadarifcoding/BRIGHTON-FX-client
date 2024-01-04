import { useQuery } from "@tanstack/react-query";
import UseAxious from "../../../../../Hook/UseAxious";
import UseCurrency from "../../../../../Hook/UseCurrency";
import CurrencyItemTable from "./CurrencyItemTable";
import { useState } from "react";



const calculateIncreasedSellPrice = (originalPrice, percentageIncrease) => {
    const increaseFactor = 1 + percentageIncrease / 100;
    return (originalPrice * increaseFactor).toFixed(2);
  };

const CurrencyTable = ({currency,upsellRate}) => {

   const Axious = UseAxious()
   
   const [percentageIncrease, setPercentageIncrease] = useState(0); // State to store the percentage increase

   // Function to handle change in percentage input


    return (
        <div className="overflow-x-auto mt-4">
        <div className="min-w-max sm:min-w-max">
          {/* Option for admin to set percentage increase */}
 
  
          {/* Currency Table */}
          <table className="bg-gray-800 p-4 w-full rounded-lg">
            <thead>
              <tr className="text-start">
                <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                  Currency Name
                </th>
                <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                  Country Name
                </th>
                <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                  Selling Price
                </th>
                <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                  Buying Price
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data row */}
              {currency?.map((item) => (<CurrencyItemTable upsellRate={upsellRate} key={item.value} item={item}></CurrencyItemTable>))}
              {/* Add more rows here based on your data */}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default CurrencyTable;