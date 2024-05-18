import React from 'react';

const OrderList = ({item}) => {
    return (
        <tr className="border-b border-gray-400">
        <td className="px-4 py-2 text-left bg-gray-200 border-r border-gray-400">{item?.status == 'buy' ? currencyTakecurrent : item?.currencyMycurrent }</td>
  <td className="px-4 py-2 text-left bg-gray-200 border-r border-gray-400">{item?.currencyTake} {item?.currencyTakecurrent}{' '}</td>
  <td className="px-4 py-2 text-left bg-gray-200 border-r border-gray-400">{item?.currencyMy} {item?.currencyMycurrent}</td>
  <td className="px-4 py-2 text-left bg-gray-200 border-r border-gray-400">{item?.Rate} GBP</td>

</tr>
    );
};

export default OrderList;