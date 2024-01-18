import axios from 'axios';
import { useState } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAxious from '../../../../Hook/UseAxious';

const AddCurrency = () => {
    const [currencyName, setCurrencyName] = useState('');
    const [countryName, setCountryName] = useState('');
    const [checking, setChecking] = useState(false);
    const [Sell, setSell] = useState(0);
    const [RateData,setRateData] = useState(0)
    const [Buy, setBuy] = useState(0);
    const [checkingLoading, setCheckingLoading] = useState(false);
    const Axious = UseAxious();
    const nav = useNavigate();
    const handleCurrencyNameChange = (e) => {
        setCurrencyName(e.target.value);
    };

    const handleCountryNameChange = (e) => {
        setCountryName(e.target.value);
    };

    const handleCheck = () => {
        setCheckingLoading(true);
        // Logic for checking currency or country validity
        // This function can validate the currency or country
        // For example, you can check if the entered currency or country is valid
        axios
            .get(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyName}&from=GBP&amount=1`, {
                headers: {
                    apikey: 'T2xiIiLGT74lpNubi61MkKWOR0qu2s46'
                }
            })
            .then((res) => {
                if (res.data?.info?.rate) {
                    setChecking(true);
                    setRateData(res.data?.info?.rate)
                }
            })
            .catch((err) => {
                toast('Wrong currency tried');
            });
        setCheckingLoading(false);
    };

    const handleAdd = () => {
        // Logic for adding the currency to the system
        // This function can add the currency and country to your data structure or database
        Axious.post('/AddCurrency', { label: countryName, value: currencyName, Sell: Sell, Buy: Buy, Rate: RateData})
            .then((res) => {
                toast(`Added ${currencyName} currency `);
                setCountryName('');
                setCurrencyName('');
                setSell(0);
                setBuy(0);
            })
            .catch((err) => {
                toast(err.message);
            });
    };
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <header className="bg-gray-800 py-4">
                <h1 className="text-3xl text-center font-bold">Currency Dashboard</h1>
            </header>
            <main className="flex-1 p-6 mt-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-medium mb-6">Add New Currency</h2>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            value={currencyName}
                            onChange={handleCurrencyNameChange}
                            placeholder="Currency Name"
                            className="px-4 py-2 rounded-md focus:outline-none focus:ring text-black focus:border-blue-300"
                        />
                        <input
                            type="text"
                            value={countryName}
                            onChange={handleCountryNameChange}
                            placeholder="Country Name"
                            className="px-4 py-2 rounded-md focus:outline-none focus:ring text-black focus:border-blue-300"
                        />
                        <input
                            type="number"
                            onChange={(e) => {
                                setBuy(e.target.value);
                            }}
                            placeholder="Sell Rate"
                            className="px-4 py-2 rounded-md focus:outline-none focus:ring text-black focus:border-blue-300"
                        />
                        <input
                            type="number"
                            onChange={(e) => {
                                setSell(e.target.value);
                            }}
                            placeholder="Buy Rate"
                            className="px-4 py-2 rounded-md focus:outline-none focus:ring text-black focus:border-blue-300"
                        />

                        <div className="flex gap-4">
                            {checking ? (
                                <button
                                    disabled
                                    className="bg-blue-500 disabled:bg-blue-700 flex gap-1 items-center text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                >
                                    Checked <FaRegCheckCircle className="" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleCheck}
                                    className="bg-blue-500 flex gap-1 items-center text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                >
                                    {checkingLoading ? (
                                        <>
                                            Checking <FaRegCheckCircle className="rotating-icon" />
                                        </>
                                    ) : (
                                        <>
                                            Check <FaRegCheckCircle className="" />
                                        </>
                                    )}
                                </button>
                            )}

                            {checking ? (
                                <button onClick={handleAdd} className={`  bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300`}>
                                    Add
                                </button>
                            ) : (
                                <button
                                    disabled
                                    onClick={handleAdd}
                                    className={` disabled:bg-green-700 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300`}
                                >
                                    Add
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <ToastContainer></ToastContainer>
            <footer className="bg-gray-800 py-4 text-center">
                <p>© 2024 Currency Dashboard. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AddCurrency;
