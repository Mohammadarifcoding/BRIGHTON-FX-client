

const CurrencyTable = () => {
    return (
              
                 <div className="overflow-x-auto mt-4 ">
                 <div className="min-w-max sm:min-w-max ">
                   <table className="bg-gray-800 w-full rounded-lg">
                     <thead>
                       <tr className="text-center">
                         <th className="py-3 pl-4 md:text-base sm:text-sm text-[12px]">Currency Name</th>
                         <th className="py-3 pl-4 md:text-base sm:text-sm text-[12px]">Country Name</th>
                         <th className="py-3 pl-4 md:text-base sm:text-sm text-[12px]">Selling Price</th>
                         <th className="py-3 pl-4 md:text-base sm:text-sm text-[12px]">Buying Price</th>
                       </tr>
                     </thead>
                     <tbody>
                       {/* Sample data row */}
                       <tr className="text-center">
                         <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">USD</td>
                         <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">United States</td>
                         <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">1.23</td>
                         <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">1.20</td>
                       </tr>
                       {/* Add more rows here based on your data */}
                     </tbody>
                   </table>
                 </div>
               </div>
    );
};

export default CurrencyTable;