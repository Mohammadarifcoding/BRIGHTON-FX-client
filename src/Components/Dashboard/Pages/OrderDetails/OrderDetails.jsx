import { useLoaderData } from 'react-router-dom';
import OrderList from './OrderList';

const OrderDetails = () => {
    const Data = useLoaderData();

    const goback = () => {
        window.history.back();
    };

    console.log(Data)
    return (
        <div className='px-3 my-10 sm:px-10'>

        {/* Currency Calculation */}
        <div className="overflow-auto border border-gray-400">
<div className="px-4 py-2 border-b border-gray-400 bg-[#618a2c] text-white">
<h1 className="text-xl font-semibold">Order Number: {Data?.Order_Id}</h1>
</div>
<table className="min-w-full">
<thead>
<tr className="border-b border-gray-400">
<th style={{backgroundColor:'#[#1a0d43]'}} className="px-4 py-2  text-left bg-[#1E4A9A] border-r border-gray-400  text-white">Currency</th>
<th className="px-4 py-2  text-left  border-r border-gray-400 bg-[#1E4A9A] text-white">From</th>
<th className="px-4 py-2  text-left  border-r border-gray-400 bg-[#1E4A9A] text-white">To</th>
<th className="px-4 py-2  text-left  bg-[#1E4A9A] text-white">Rate</th>
</tr>
</thead>
<tbody>
{Data?.Orders?.map((item, index) => (
<OrderList key={index} item={item}></OrderList>
))}
</tbody>
</table>
</div>

{/* User address */}
<div className="mt-10 overflow-hidden border border-gray-400">
<div className="px-4 py-2 border-b border-gray-400 overflow-auto bg-[#618a2c] text-white">
<h1 className="text-xl font-semibold">Booking Details</h1>
</div>
<div className="min-w-full">
<div className="flex border-b border-gray-400">
<div className="py-3 border-r border-gray-400 font-semibold md:w-[20%] w-[30%] text-center bg-[#1E4A9A] text-white">
Full Name
</div>
<div className="border-gray-400 bg-gray-200 py-3 px-4 w-[80%] text-start">
{Data?.Name}
</div>
</div>
<div className="flex border-b border-gray-400">
<div className="py-3 border-r border-gray-400 font-semibold md:w-[20%] w-[30%] text-center bg-[#1E4A9A] text-white">
Email
</div>
<div className="border-gray-400 bg-gray-200 py-3 px-4 w-[80%] text-start">
{Data?.Email}
</div>
</div>
<div className="flex border-b border-gray-400">
<div className="py-3 border-r border-gray-400 font-semibold md:w-[20%] w-[30%] text-center bg-[#1E4A9A] text-white">
Contact
</div>
<div className="border-gray-400 bg-gray-200 py-3 px-4 w-[80%] text-start">
{Data?.Phone_Number}
</div>
</div>
    <div className="flex">
      <div className="py-3 border-r border-gray-400 font-semibold md:w-[20%] w-[30%] text-center bg-[#1E4A9A] text-white">
        Pickup Location
      </div>
      <div className="border-gray-400 bg-gray-200 py-3 px-4 w-[80%] text-start">
        
        {Data?.Address}
      </div>
    </div>
</div>
</div>


<div className="mt-10 flex flex-col gap-5 bg-[#1E4A9A] p-5 text-white">
<h2 className="text-base font-semibold sm:text-lg">Important Notification</h2>
<p className="text-sm">Please read carefully before you leave for the collection.</p>
<p className="text-sm">Collect your Instore Branch collection order on the same day in between office hours. Kindly read the Terms and Conditions for payments and necessary supporting documents.</p>
<p className="text-sm">All orders are accepted subject to stock and denominations availability at your selected branch. A member of our team will be in touch promptly only if the currency booked is not available and advise you of an alternate collection time. Please print the order confirmation receipt and present it at the selected branch counter, or you can quote the reference number with your ID for collection.</p>
<p className="text-sm">For Card Payment: Your ID must be in the form of either your valid passport or full UK or European photo driving licence, European ID, along with your payment bank card, which must match the name on the order.</p>
</div>

        </div>
    );
};

export default OrderDetails;
