import { useQuery } from "@tanstack/react-query";
import UseAxious from "../../../../../Hook/UseAxious";
import UseCurrency from "../../../../../Hook/UseCurrency";
import CurrencyItemTable from "./CurrencyItemTable";
import { useState } from "react";




const CurrencyTable = ({currency}) => {

  

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
                  Market Price
                </th>
                <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                  Selling Price
                </th>
                <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                  Buying Price
                </th>
                <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data row */}
              {currency?.map((item) => (<CurrencyItemTable  key={item.value} item={item}></CurrencyItemTable>))}
              {/* Add more rows here based on your data */}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default CurrencyTable;