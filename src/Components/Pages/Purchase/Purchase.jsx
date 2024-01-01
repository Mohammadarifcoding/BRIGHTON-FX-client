import { useState } from "react";
import Container from "../../Shared/Container/Container";
import { IoIosArrowForward } from "react-icons/io";
import currency from "../../../../public/Data/Currency";
import OrderSummary from "./OrderSummary/OrderSummary";
import AddProduct from "./AddProduct/AddProduct";

const Purchase = () => {
  const [purchaseData, setPurchaseeData] = useState(
    JSON.parse(localStorage.getItem("purchase"))
  );
  const [currencyData, setCurrencyData] = useState({
    value: "BDT",
    label: "Bangladeshi Taka",
  });
  const item = [
    {
      value: 1,
      text: "Create Order",
    },
    {
      value: 2,
      text: "YOUR DETAILS",
    },
    {
      value: 3,
      text: "ORDER CONFIRMATION",
    },
  ];

  return (
    <Container>
      <div className="lg:mt-20 mt-10 pb-40">
        <h2 className="lg:text-3xl text-2xl font-medium md:text-start text-center">
          Order and sell money
        </h2>

        <div className="flex items-center mt-20 justify-between">
          {item.map((value) => (
            <div key={value.value} className=" flex items-center gap-3">
              <div className="flex  items-center gap-3 md:flex-row flex-col">
                <div
                  className={` ${
                    value.value == 1
                      ? "bg-[#4A53A4] text-white"
                      : "bg-white border-2 border-gray-400 text-gray-400"
                  }    rounded-full lg:py-6 lg:px-10 md:py-8 md:px-12 sm:px-12 sm:py-9 px-6 py-4  md:text-4xl sm:text-3xl text-2xl`}
                >
                  {value.value}
                </div>
                <h2 className="lg:text-2xl md:text-xl sm:text-lg  text-[13px] whitespace-normal ">
                  {value.text}
                </h2>
              </div>

              <div
                className={` ${
                  value.value == 3 && "hidden"
                } lg:text-3xl md:text-3xl sm:text-3xl text-lg`}
              >
                <IoIosArrowForward></IoIosArrowForward>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
       {/* {purchaseData?.length && <div className=" lg:mt-32 mt-14">
          <div className="">
            <h2 className="text-[#4A53A4]  font-medium sm:text-2xl text-2xl  ">
              Order Summary{" "}
            </h2>
            <div className="flex items-center  flex-col  mt-10 gap-3">
              {purchaseData?.map((item) => (
                <div onClick={(id)=>{handleDelete(item.id)}} key={item} className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2  bg-gray-200 items-center w-full justify-between gap-6 p-3">
                  <div className="flex gap-5 items-center ">
                    <h2 className="px-3 bg-gray-500 text-white py-2 rounded-md">
                    {item.currencyMycurrent}
                    </h2>
                    <h2 className="text-lg">{item.currencyMy} {item.currencyMycurrent}</h2>
                  </div>
                  <div className="text-lg text-center">
                    <h2>Rate {item.Rate}</h2>
                  </div>

                  <div className="flex gap-5 items-center lg:justify-center ">
                    <h2 className="px-3 bg-gray-500 text-white py-2 rounded-md">
                    {item.currencyTakecurrent}
                    </h2>
                    <h2 className="text-l">{item.currencyTake} {item.currencyTakecurrent}</h2>
                  </div>
                  <div className="text-lg text-end">
                    <button className="btn btn-error text-white">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>}
         */}

         <OrderSummary purchaseData={purchaseData}></OrderSummary>

        {/* Add Currency */}

        <AddProduct></AddProduct>
      </div>
    </Container>
  );
};

export default Purchase;
