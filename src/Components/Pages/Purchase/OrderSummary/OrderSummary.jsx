import { useState } from "react";
import OrderItem from "./OrderItem";


const OrderSummary = ({purchaseData}) => {

    const [allTheitem,setAllTheItem] = useState(purchaseData)


    const handleDelete = (id)=>{
        const previousData = JSON.parse(localStorage.getItem('purchase'))
        const newData = previousData.filter(item => item.id !== id)
        setAllTheItem(newData)
        localStorage.setItem('purchase',JSON.stringify(newData))
     }

    return (
        <div>
             {allTheitem?.length ? <div className=" lg:mt-32 mt-14">
          <div className="">
            <h2 className="text-[#4A53A4]  font-medium sm:text-2xl text-2xl  ">
              Order Summary{" "}
            </h2>
            <div className="flex items-center  flex-col  mt-10 gap-3">
              {allTheitem?.map((item) => <OrderItem key={item} allTheitem={allTheitem} setAllTheItem={setAllTheItem} handleDelete={handleDelete} item={item}></OrderItem>)}
            </div>
          </div>
        </div>:''}
        </div>
    );
};

export default OrderSummary;