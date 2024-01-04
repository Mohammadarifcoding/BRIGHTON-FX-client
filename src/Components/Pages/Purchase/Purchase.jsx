import { useState } from "react";
import Container from "../../Shared/Container/Container";
import { IoIosArrowForward } from "react-icons/io";

import OrderSummary from "./OrderSummary/OrderSummary";
import AddProduct from "./AddProduct/AddProduct";
import CheckingPoint from "./CheckingPoint/CheckingPoint";
import Process from "./Process/Process";
import UseCurrency from "../../../Hook/UseCurrency";

const Purchase = () => {
  const [purchaseData, setPurchaseeData] = useState(
    JSON.parse(localStorage.getItem("purchase"))
  );

  const [currency,refetchCurrency] = UseCurrency()

  const [nextFrom,setNextForm] = useState(1)

  const [address,setAddressSelected] = useState('')
  const [allTheitem,setAllTheItem] = useState(purchaseData)
  const [currencyData, setCurrencyData] = useState({
    value: "BDT",
    label: "Bangladeshi Taka",
  });
 

  return (
    <Container>
      <div className="lg:mt-20 mt-10 pb-40">
        <h2 className="lg:text-3xl text-2xl font-medium md:text-start text-center">
          Order and sell money
        </h2>
      
        <Process no={nextFrom}></Process>

         <OrderSummary allTheitem={allTheitem} setAllTheItem={setAllTheItem} purchaseData={purchaseData}></OrderSummary>

        {/* Add Currency */}
        { nextFrom == 1 ? <>
          <AddProduct allTheitem={allTheitem} setAllTheItem={setAllTheItem} purchaseData={purchaseData} setPurchaseeData={setPurchaseeData}></AddProduct>
        <ul className="flex flex-col mt-10 list-disc ml-6">
           <li>Lorem ipsum dolor sit amet consectetur.</li>
           <li>Lorem ipsum dolor sit amet consectetur.</li>
           <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        </>  :''
      
      }
        


        <CheckingPoint nextFrom={nextFrom} setNextForm={setNextForm} setAddressSelected={setAddressSelected}></CheckingPoint>
      </div>
    </Container>
  );
};

export default Purchase;
