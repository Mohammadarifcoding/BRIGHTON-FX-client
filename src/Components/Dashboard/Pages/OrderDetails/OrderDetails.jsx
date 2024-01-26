import { useLoaderData } from 'react-router-dom';

const OrderDetails = () => {
    const Data = useLoaderData();

    const goback = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-900  min-h-screen flex flex-col">
            <header className="bg-gray-800 py-4">
                <h1 className="text-3xl text-center font-bold">Order Details</h1>
            </header>
            <main className="flex-1 p-6">
                <div className="bg-gray-100 py-10 px-6">
                    <h2 className="md:text-4xl text-3xl text-center font-medium flex justify-center items-center gap-3">
                        <img className="w-10 md:block hidden" src="/Images/check-mark.png" alt="" />
                        Order Information
                    </h2>
                    <div className="flex md:flex-row flex-col items-start">
                        <div className="mt-20 flex-1 gap-3 flex flex-col text-gray-900">
                            <h2 className="mb-4 sm:text-2xl text-xl flex items-center gap-2 font-semibold">
                                Personal Information <img className="w-6" src="/Images/contract.png" alt="" />
                            </h2>
                            <h2 className="sm:text-xl">
                                <span className="font-semibold">Name</span>: {Data?.Name}
                            </h2>
                            <h2 className="sm:text-xl">
                                <span className="font-semibold">Email</span>: {Data?.Email}
                            </h2>
                            <h2 className="sm:text-xl">
                                <span className="font-semibold">Phone</span>: {Data?.Phone_Number}
                            </h2>
                        </div>
                        <div className="mt-20 flex-1 gap-3 flex flex-col text-gray-900">
                            <h2 className="mb-4 sm:text-2xl text-xl flex items-center gap-2 font-semibold">
                                Order Information <img className="w-6" src="/Images/contract.png" alt="" />
                            </h2>
                            <h2 className="sm:text-xl">
                                <span className="font-semibold">Order Id</span>: {Data?.Order_Id}
                            </h2>
                            <h2 className="sm:text-xl my-2">
                                <span className="font-semibold">Checking Point</span>: {Data?.Address}
                            </h2>
                            {Data?.Orders?.map((item, index) => (
                                <h2 key={index} className="sm:text-xl mt-2">
                                    Customer Give{' '}
                                    <span className="font-semibold">
                                        : {item?.currencyMy} {item?.currencyMycurrent}
                                    </span>
                                    >> Customer get{' '}
                                    <span className="font-semibold">
                                        : {item?.currencyTake} {item?.currencyTakecurrent}
                                    </span>{' '}
                                    (Rate {(item?.Rate).toFixed(4)})
                                </h2>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-20">
                        <button onClick={goback} className="btn bg-[#93C94E] px-5 py-3 hover:bg-[#678c36] hover:text-white">
                            Go Back
                        </button>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-800 py-4 text-center">
                <p>© 2024 Orders Dashboard. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default OrderDetails;
