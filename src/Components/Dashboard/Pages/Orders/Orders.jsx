import { Link } from 'react-router-dom';
import PendingOrder from '../../../../Hook/PendingOrder';
import UseAxious from '../../../../Hook/UseAxious';
import { v4 as uuidv4 } from 'uuid';
import emailjs from '@emailjs/browser';
import { BsInfoCircleFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import moment from 'moment';
import { FaInfoCircle } from 'react-icons/fa';
import { IoMdDoneAll } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

const Orders = () => {
    const [pendingOrders, RefetchPendingOrder] = PendingOrder();
    const Axious = UseAxious();

    const handleAcceptOrder = (orderId, Email, order) => {
        console.log(order);

        //   const UserInformation = {
        //     Order_Id: uuidv4(),
        //     Name: order?.Name,
        //     Email: Email,
        //     Phone_Number:order?.Phone_Number,
        //     Address: order?.Address,
        //     Orders:order?.Orders,
        //     CurrencyName:order?.Orders[0].currencyMycurrent,
        //     FxAmount:`${order?.Orders[0].currencyMy} ${order?.Orders[0].currencyMycurrent}`,
        //     Rate : order?.Orders[0].Rate,
        //     TotalMoney : `${order?.Orders[0].currencyTake} ${order?.Orders[0].currencyTakecurrent}`,
        //     Status: 'Pending'
        // };

        // console.log(UserInformation)
        const tempForm = document.createElement('form');
        tempForm.style.display = 'none';

        // Loop through the keys of the UserInformation object and create input fields
        for (const key in order) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = key;
            input.value = order[key];
            tempForm.appendChild(input);
        }
        console.log(tempForm);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Aceept!'
        }).then((result) => {
            if (result.isConfirmed) {
                Axious.get(`/pendingToAceept/${orderId}`).then((res) => {
                    RefetchPendingOrder();
                    emailjs.sendForm('service_geyk8rj', 'template_gt16753', tempForm, '-IllRWDI3WXoeT7lj').then((res) => {
                        console.log('email send');
                        Swal.fire({
                            title: 'Accepted!',
                            text: 'This order has been accepted.',
                            icon: 'success'
                        });
                    });
                });
            }
        });
        // Logic to accept the order with orderId
        // This function can update the order status or perform other actions
        // Axious.get(`/pendingToAceept/${orderId}`)
        // .then(res => {
        //   RefetchPendingOrder()
        //   emailjs.sendForm("service_geyk8rj","template_gt16753",tempForm,'-IllRWDI3WXoeT7lj')
        //   .then(res=>{
        //     console.log('email send')
        //   })
        // })
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
                    RefetchPendingOrder();
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
                <h1 className="text-3xl text-center font-bold">Pending Orders</h1>
            </header>
            <main className="flex-1 p-6 mt-10">
                <div className="overflow-x-auto mt-4">
                    <div className="min-w-max sm:min-w-max">
                        {/* Option for admin to set percentage increase */}

                        {/* Currency Table */}
                        <table className="bg-gray-800 p-4 w-full rounded-lg">
                            <thead>
                                <tr className="text-start">
                                    <th className="py-3 pl-4 text-start">Order ID</th>
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
                                {pendingOrders?.map((order) => (
                                    <tr key={order?._id} className="text-start">
                                        <td className="py-2 pl-4">{order?.Order_Id}</td>
                                        <td className="py-2 pl-4">{order?.Name}</td>
                                        <td className="py-2 pl-4">{order?.Phone_Number}</td>
                                        <td className="py-2 pl-4">{order?.title}</td>
                                        <td className="py-2 pl-4">{order?.TotalMoney}</td>
                                        <td className="py-2 pl-4">{order?.FxAmount}</td>
                                        <td className="py-2 pl-4">{moment(order?.time).format('MMMM Do YYYY')}</td>
                                        <td className="py-2 pl-4">
                                            <button
                                                onClick={() => handleAcceptOrder(order?._id, order?.Email, order)}
                                                className="bg-green-500 text-white py-2 px-3 rounded-md mr-2 hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
                                            >
                                                <IoMdDoneAll></IoMdDoneAll>
                                            </button>
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/orderDetails/${order?._id}`}>
                                                <button className="bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                                    <FaInfoCircle></FaInfoCircle>
                                                </button>
                                            </Link>
                                        </td>
                                        <td className="py-2 pl-4">
                                            <button
                                                onClick={() => handleRemoveOrder(order?._id, order?.Email, order)}
                                                className="bg-red-500 text-white py-2 px-3 rounded-md mr-2 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                                            >
                                                <MdDeleteForever />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <footer className="bg-[#93C94E] flex justify-center  py-4 text-center">
                <img className="h-12" src="/public/Images/logo.png" alt="" />
            </footer>
        </div>
    );
};

export default Orders;
