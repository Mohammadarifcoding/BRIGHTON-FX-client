import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import UseAxious from '../../../../Hook/UseAxious';
import UseAcceptedOrder from '../../../../Hook/UseAcceptedOrder';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import moment from 'moment';
import { FaInfoCircle } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

const DoneOrders = () => {
    const [AcceptedOrder, RefetchAcceptedOrder] = UseAcceptedOrder();
    const Axious = UseAxious();

    const handleAcceptOrder = (orderId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Complete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Axious.put(`/acceptedToCompleted/${orderId}`).then((res) => {
                    RefetchAcceptedOrder();
                    Swal.fire({
                        title: 'Completed!',
                        text: 'This order has been completed.',
                        icon: 'success'
                    });

                    console.log(res);
                });
            }
        });
        // Logic to accept the order with orderId

        // This function can update the order status or perform other actions
    };
    const handleRemoveOrder = (orderId) => {
        // Logic to accept the order with orderId
        // This function can update the order status or perform other actions
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Axious.delete(`/deleteOrder/${orderId}`).then((res) => {
                    RefetchAcceptedOrder();
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        icon: 'success'
                    });
                });
            }
        });
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <header className="bg-gray-800 py-4">
                <h1 className="text-3xl text-center font-bold">Accepted Orders</h1>
            </header>
            <main className="flex-1 p-6 mt-10">
                <div className="overflow-x-auto mt-4">
                    <div className="min-w-max sm:min-w-max">
                        {/* Option for admin to set percentage increase */}

                        {/* Currency Table */}
                        <table className="bg-gray-800 p-4 w-full rounded-lg">
                            <thead>
                                <tr className="text-start">
                                    <th className="py-3 pl-4 text-start">Order Id</th>
                                    <th className="py-3 pl-4 text-start">Name</th>
                                    <th className="py-3 pl-4 text-start">Phone Number</th>
                                    <th className="py-3 pl-4 text-start">Way</th>
                                    <th className="py-3 pl-4 text-start">Amount</th>
                                    <th className="py-3 pl-4 text-start">FX Amount</th>
                                    <th className="py-3 pl-4 text-start">Time</th>
                                    <th className="py-3 pl-4 text-start">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AcceptedOrder?.map((order) => (
                                    <tr key={order?._id} className="text-start">
                                        <td className="py-2 pl-4">{order?.Order_Id}</td>
                                        <td className="py-2 pl-4">{order?.Name}</td>
                                        <td className="py-2 pl-4">{order?.Phone_Number}</td>
                                        <td className="py-2 pl-4">{order?.title}</td>
                                        <td className="py-2 pl-4">{order?.TotalMoney}</td>
                                        <td className="py-2 pl-4">{order?.FxAmount}</td>

                                        <td className="py-2 pl-4">{moment(order?.time).format('MMMM Do YYYY')}</td>
                                        <div className="flex gap-3 mx-2 items-center">
                                            <td>
                                                <Link to={`/dashboard/orderDetails/${order?._id}`}>
                                                    <button className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                                        <FaInfoCircle></FaInfoCircle>
                                                    </button>
                                                </Link>
                                            </td>

                                            <td className="">
                                                <button
                                                    onClick={() => {
                                                        handleAcceptOrder(order?._id);
                                                    }}
                                                    className="bg-green-600 text-white py-2 px-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
                                                >
                                                    <IoMdDoneAll></IoMdDoneAll>
                                                </button>
                                            </td>
                                            <td className="py-2 ">
                                                <button
                                                    onClick={() => handleRemoveOrder(order?._id, order?.Email, order)}
                                                    className="bg-red-500 text-white py-2 px-3 rounded-md mr-2 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                                                >
                                                    <MdDeleteForever />
                                                </button>
                                            </td>
                                        </div>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-800 py-4 text-center">
                <p>© 2024 Orders Dashboard. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default DoneOrders;
