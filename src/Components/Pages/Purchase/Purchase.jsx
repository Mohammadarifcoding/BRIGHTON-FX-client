import { useState } from "react";
import Container from "../../Shared/Container/Container";
import { IoIosArrowForward } from "react-icons/io";

import OrderSummary from "./OrderSummary/OrderSummary";
import AddProduct from "./AddProduct/AddProduct";
import CheckingPoint from "./CheckingPoint/CheckingPoint";
import Process from "./Process/Process";
import UseCurrency from "../../../Hook/UseCurrency";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const [purchaseData, setPurchaseeData] = useState(
    JSON.parse(localStorage.getItem("purchase"))?.filter(item => {
      const itemDate = new Date(item.date);
      const diff = new Date().getTime() - itemDate; // This will be positive only if itemDate is in the past
      return diff >= 0 && diff <= 30 * 60 * 1000;
    })
  );

  const {currencyParams,currentWay} = useParams()
  
  
  const [currency,refetchCurrency] = UseCurrency()

  const [nextFrom,setNextForm] = useState(1)

  const [address,setAddressSelected] = useState('')
  const [allTheitem,setAllTheItem] = useState(purchaseData)
 
 

  return (
    <Container>
      <div className="lg:mt-20 mt-10 pb-40">
        <h2 className={`lg:text-3xl text-2xl font-medium md:text-start text-center ${nextFrom == 3 && 'hidden'}`}>
          {
            currentWay == 'Sell' ? <>Sell travel money</>:<>Order travel money</>
          }
          
        </h2>
        <h2 className={`lg:text-3xl text-2xl font-medium md:text-start -mb-20 text-center ${nextFrom !== 3 && 'hidden'}`}>
              Order Confirmation
          </h2>
        {
          nextFrom !== 3 && <Process no={nextFrom}></Process>
        }
        
         {
          nextFrom == 3 ? '':<OrderSummary allTheitem={allTheitem} setAllTheItem={setAllTheItem} purchaseData={purchaseData}></OrderSummary>
         }
         

        {/* Add Currency */}
        { nextFrom == 1 ? <>
          <AddProduct currentWay={currentWay} currencyParams={currencyParams} allTheitem={allTheitem} setAllTheItem={setAllTheItem} purchaseData={purchaseData} setPurchaseeData={setPurchaseeData}></AddProduct>
        <ul className="flex flex-col font-medium mt-10 text-lg list-disc ml-6">
           <li className=" ">Bring your ID for collection</li>
           <li >Order online, pay in-store</li>
           <li>24-hour rate guarantee upon order arrival in the store</li>
        </ul>
        </>  :''
      
      }
        


        <CheckingPoint currentWay={currentWay} nextFrom={nextFrom} setNextForm={setNextForm} setAddressSelected={setAddressSelected}></CheckingPoint>
      </div>
    </Container>
  );
};

export default Purchase;
