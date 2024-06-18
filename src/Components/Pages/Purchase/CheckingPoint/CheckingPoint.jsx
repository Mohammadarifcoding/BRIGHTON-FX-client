import { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { v4 as uuidv4 } from "uuid";
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import UseAxious from "../../../../Hook/UseAxious";
import { Link } from "react-router-dom";
import generateRandomAlphabet from "./../../../ExtraFuntion/GenerateUniqueId";
import OrderList from "../../../Dashboard/Pages/OrderDetails/OrderList";

const CheckingPoint = ({ setAddressSelected, setNextForm, nextFrom, currentWay }) => {
    const AddressForm = useRef();
    let OrdersData = JSON.parse(localStorage.getItem("purchase"));
    const [address, setAddress] = useState("location");
    const Axious = UseAxious();
    const [Order, setlastOrder] = useState({});
    const [selected, setSelected] = useState(false);
    console.log(currentWay);
    const GetAddress = () => {
        if (address == "location") {
            return toast("Select the checking point");
        }

        const OrderFormLocalStorage = JSON.parse(localStorage.getItem("purchase"));
        if (OrderFormLocalStorage?.length < 1) {
            return toast("Please add currency item");
        }
        setAddressSelected(address);
        setNextForm(2);
    };

    const getFinishedOrder = (e) => {
        e.preventDefault();
        try {
            const First_Name = e.target.FirstName.value;
            const Last_Name = e.target.LastName.value;
            const Email = e.target.to_email.value;
            const Confrim_Email = e.target.ConfromEmail.value;
            const Phone_Number = e.target.Number.value;
            if (Email !== Confrim_Email) {
                return toast("Emails doesnt match");
            }

            if (!selected) {
                return toast("Please select the rules");
            }

            const UserInformation = {
                Order_Id: generateRandomAlphabet(),
                Name: First_Name + " " + Last_Name,
                Email: Email,
                Phone_Number: Phone_Number,
                Address: address,
                Orders: JSON.parse(localStorage.getItem("purchase")),
                RateFirst: OrdersData[0].Rate,
                status: "",
                Status: "Pending",
                title: "",
                SecondRow: "Amount",
                FourthRow: "Fx Amount",
                FxAmount: `${OrdersData[0].currencyMy} ${OrdersData[0].currencyMycurrent}`,
                TotalMoney: `${OrdersData[0].currencyTake} ${OrdersData[0].currencyTakecurrent}`,
                time: new Date(),
                CurrencyNameFirst: OrdersData[0].currencyMycurrent === "GBP" ? OrdersData[0].currencyTakecurrent : OrdersData[0].currencyMycurrent,
                ToFirst: `${OrdersData[0].currencyMy} ${OrdersData[0].currencyMycurrent}`,
                FromFirst: `${OrdersData[0].currencyTake} ${OrdersData[0].currencyTakecurrent}`
            };
            if (currentWay == "Order") {
                UserInformation.title = "Click & Collect";
                // UserInformation.SecondRow = 'Amount';
                // UserInformation.FourthRow = 'Fx Amount';
                UserInformation.status = "buy";
                UserInformation.secondTitle = `Collecting your order :`;
                (UserInformation.secondMessege = `When collecting your order, you will need to provide proof of ID in the form of photographic ID (passport or driving license). Please note that proof of address, such as a utility bill or a bank/credit card statement dated within the past 90 days, may also be needed in certain circumstances.`),
                    (UserInformation.firstMessege = `Your order ${UserInformation.Order_Id} is currently being processed, and we will notify you when it is ready for collection from our Branch - ${UserInformation.Address}.`);
            } else if (currentWay == "Sell") {
                UserInformation.title = "Click & Sell";
                // UserInformation.SecondRow = 'Fx Amount';
                // UserInformation.FourthRow = 'Amount';
                UserInformation.status = "sell";
                UserInformation.firstMessege = `Thank you for your order. Please bring this email or order number ${UserInformation.Order_Id} with you to your selected location to sell your foreign currency.`;
                UserInformation.note =
                    "Note: Click & Sell rates are subject to verification of all banknotes at the premises. We may decline to accept notes which are found to be counterfeited, out of date, torn or damaged or insignificant in value. We do not accept foreign coins. Our Click & Sell rate does not apply to large denomination notes such as Euro 500. Different rates will apply for those denominations. For full terms and conditions, visit our website.";
            }
            if (OrdersData[1]?.currencyTake) {
                (UserInformation.CurrencyNameSecond = OrdersData[1].currencyMycurrent === "GBP" ? OrdersData[1].currencyTakecurrent : OrdersData[1].currencyMycurrent),
                    (UserInformation.FromSecond = `${OrdersData[1].currencyTake} ${OrdersData[1].currencyTakecurrent}`);
                UserInformation.ToSecond = `${OrdersData[1].currencyMy} ${OrdersData[1].currencyMycurrent}`;
                UserInformation.RateSecond = OrdersData[1].Rate;
            } else {
                UserInformation.SecondRowShow = "none";
            }
            if (OrdersData[2]?.currencyTake) {
                (UserInformation.CurrencyNameThird = OrdersData[2].currencyMycurrent === "GBP" ? OrdersData[2].currencyTakecurrent : OrdersData[2].currencyMycurrent),
                    (UserInformation.FromThird = `${OrdersData[2].currencyTake} ${OrdersData[2].currencyTakecurrent}`);
                UserInformation.ToThird = `${OrdersData[2].currencyMy} ${OrdersData[2].currencyMycurrent}`;
                UserInformation.RateThird = OrdersData[2].Rate;
            } else {
                UserInformation.ThirdRowShow = "none";
            }
            if (OrdersData[3]?.currencyTake) {
                (UserInformation.CurrencyNameFourth = OrdersData[3].currencyMycurrent === "GBP" ? OrdersData[3].currencyTakecurrent : OrdersData[3].currencyMycurrent),
                    (UserInformation.FromFourth = `${OrdersData[0].currencyTake} ${OrdersData[0].currencyTakecurrent}`);
                UserInformation.ToFourth = `${OrdersData[0].currencyMy} ${OrdersData[0].currencyMycurrent}`;
                UserInformation.RateFourth = OrdersData[3].Rate;
            } else {
                UserInformation.FourthRowShow = "none";
            }

            console.log(UserInformation.Orders.currencyMycurrent);
            const tempForm = document.createElement("form");
            tempForm.style.display = "none";

            // Loop through the keys of the UserInformation object and create input fields
            for (const key in UserInformation) {
                const input = document.createElement("input");
                input.type = "text";
                input.name = key;
                input.value = UserInformation[key];
                tempForm.appendChild(input);
            }

            Axious.post("/Order", UserInformation).then((res) => {
                emailjs.sendForm("service_geyk8rj", "template_9ag9qg6", tempForm, "-IllRWDI3WXoeT7lj").then((res) => {
                    console.log(res);
                });
                setlastOrder(UserInformation);
                localStorage.clear("purchase");

                setNextForm(3);
            });
        } catch {
            setNextForm(1);
            return toast("Something went wrong");
        }
    };
    const handlePrint = () => {
        window.print(); // This triggers the browser's print dialog
        return false;
    };

    return (
        <>
            {" "}
            <div className="mt-28 deleteSection">
                {nextFrom == 1 ? (
                    <>
                        <h2 className="md:text-2xl sm:text-xl text-xl text-[#4A53A4]">Select a Collection Point</h2>

                        <select
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            className="w-full px-2 py-2 mt-5 border border-gray-500 rounded-lg outline-gray-500"
                        >
                            <option value="location">Select locaiton</option>

                            <option value="35 CHAPEL ROAD WORTHING BN11 1EG Tel: 01903 202702">35 CHAPEL ROAD WORTHING BN11 1EG Tel: 01903 202702</option>
                            <option value="123 QUEENS ROAD BRIGHTON BN1 3WB Tel:01273 030708"> 123 QUEENS ROAD BRIGHTON BN1 3WB Tel:01273 030708</option>
                        </select>

                        <div className="flex justify-end mt-5 ">
                            <button onClick={GetAddress} className="flex bg-[#93C94E] px-5 py-3 hover:bg-[#678c36] hover:text-white gap-2">
                                Next <span> + </span>
                            </button>
                        </div>
                    </>
                ) : (
                    ""
                )}

                {nextFrom == 2 ? (
                    <>
                        <h2 className="md:text-2xl sm:text-xl text-xl text-[#4A53A4]">Personal Details</h2>

                        <form ref={AddressForm} onSubmit={getFinishedOrder} className="flex flex-col">
                            <input
                                name="FirstName"
                                required
                                type="text"
                                placeholder="Enter First Name"
                                className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md"
                            />
                            <input
                                name="LastName"
                                required
                                type="text"
                                placeholder="Enter Last Name"
                                className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md"
                            />
                            <input
                                name="to_email"
                                required
                                type="email"
                                placeholder="Enter Email"
                                className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md"
                            />
                            <input
                                name="ConfromEmail"
                                required
                                type="email"
                                placeholder="Confirm Email"
                                className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md"
                            />
                            <input
                                name="Number"
                                required
                                type="tel"
                                placeholder="Enter Phone Number"
                                className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md"
                            />
                            <h2 className="flex items-center gap-2 mt-4 text-lg">
                                {selected ? (
                                    <IoIosCheckbox
                                        className="text-2xl"
                                        onClick={() => {
                                            setSelected(false);
                                        }}
                                    ></IoIosCheckbox>
                                ) : (
                                    <MdOutlineCheckBoxOutlineBlank
                                        onClick={() => {
                                            setSelected(true);
                                        }}
                                        className="text-2xl"
                                    ></MdOutlineCheckBoxOutlineBlank>
                                )}
                                I accept all the{" "}
                                <Link className="text-blue-600 hover:underline" to={"/termsCoditition"}>
                                    Terms and condition
                                </Link>
                            </h2>

                            <div className="flex  mt-3 md:max-w-[500px] sm:w-full justify-end">
                                <button type="submit" onClick={GetAddress} className="flex bg-[#93C94E] px-5 py-3 hover:bg-[#678c36] hover:text-white gap-2">
                                    Next +
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    ""
                )}

                <ToastContainer></ToastContainer>
            </div>
            {nextFrom == 3 ? (
                <>
                    <div className="px-3 my-10 sm:px-10 print h-[700px]">
                        <div className="flex lg:mb-20 mb-7 deleteButton justify-end ">
                            <button onClick={handlePrint} className="px-4 py-2 bg-[#618A2C] rounded-lg text-white">
                                Print
                            </button>
                        </div>
                        {/* Currency Calculation */}
                        <div className="overflow-auto border border-gray-400">
                            <div className="px-4 py-2 border-b border-gray-400 bg-[#618a2c] text-white">
                                <h1 className=" font-semibold">Order Number: {Order?.Order_Id}</h1>
                            </div>
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b border-gray-400">
                                        <th style={{ backgroundColor: "#[#1a0d43]" }} className="px-4 py-2  text-left bg-[#1E4A9A] border-r border-gray-400  text-white">
                                            Currency
                                        </th>
                                        <th className="px-4 py-2  text-left  border-r border-gray-400 bg-[#1E4A9A] text-white">From</th>
                                        <th className="px-4 py-2  text-left  border-r border-gray-400 bg-[#1E4A9A] text-white">To</th>
                                        <th className="px-4 py-2  text-left  bg-[#1E4A9A] text-white">Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Order?.Orders?.map((item, index) => (
                                        <OrderList key={index} item={item}></OrderList>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* User address */}
                        <div className="mt-10 overflow-hidden border border-gray-400">
                            <div className="px-4 py-2 border-b border-gray-400 overflow-auto bg-[#618a2c] text-white">
                                <h1 className=" font-semibold">Booking Details</h1>
                            </div>
                            <div className="min-w-full">
                                <div className="flex border-b border-gray-400">
                                    <div className="py-3 border-r border-gray-400 font-semibold md:w-[20%] w-[30%] text-center bg-[#1E4A9A] text-white">Full Name</div>
                                    <div className="border-gray-400 bg-gray-200 py-3 px-4 w-[80%] text-start">{Order?.Name}</div>
                                </div>
                                <div className="flex border-b border-gray-400">
                                    <div className="py-3 border-r border-gray-400 font-semibold md:w-[20%] w-[30%] text-center bg-[#1E4A9A] text-white">Email</div>
                                    <div className="border-gray-400 bg-gray-200 py-3 px-4 w-[80%] text-start">{Order?.Email}</div>
                                </div>
                                <div className="flex border-b border-gray-400">
                                    <div className="py-3 border-r border-gray-400 font-semibold md:w-[20%] w-[30%] text-center bg-[#1E4A9A] text-white">Contact</div>
                                    <div className="border-gray-400 bg-gray-200 py-3 px-4 w-[80%] text-start">{Order?.Phone_Number}</div>
                                </div>
                                <div className="flex">
                                    <div className="py-3 border-r border-gray-400 font-semibold md:w-[20%] w-[30%] text-center bg-[#1E4A9A] text-white">Pickup Location</div>
                                    <div className="border-gray-400 bg-gray-200 py-3 px-4 w-[80%] text-start">{Order?.Address}</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col gap-5 bg-[#1E4A9A] p-5 text-white">
                            <h2 className="text-base font-semibold ">Important Notification</h2>
                            <p className="text-sm">Please read carefully before you leave for the collection.</p>
                            <p className="text-sm">
                                Collect your Instore Branch collection order on the same day in between office hours. Kindly read the Terms and Conditions for payments and necessary supporting
                                documents.
                            </p>
                            <p className="text-sm">
                                All orders are accepted subject to stock and denominations availability at your selected branch. A member of our team will be in touch promptly only if the currency
                                booked is not available and advise you of an alternate collection time. Please print the order confirmation receipt and present it at the selected branch counter, or
                                you can quote the reference number with your ID for collection.
                            </p>
                            <p className="text-sm">
                                For Card Payment: Your ID must be in the form of either your valid passport or full UK or European photo driving licence, European ID, along with your payment bank
                                card, which must match the name on the order.
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </>
    );
};

export default CheckingPoint;
