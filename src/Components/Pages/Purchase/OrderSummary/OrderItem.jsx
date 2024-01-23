

const OrderItem = ({item,allTheitem,setAllTheItem,handleDelete}) => {




    return (
      <div className="w-full">
        <>
             <div  key={item} className="lg:grid hidden lg:grid-cols-4 sm:grid-cols-2 grid-cols-2  bg-[#F5F8F7] border  items-center w-full justify-between gap-6 py-2 px-2">
        <div className="flex gap-5 items-center ">
          <h2 className="px-2 bg-gray-500  text-white py-1 rounded-md">
          {item.currencyMycurrent}
          </h2>
          <h2 className="">{item.currencyMy} {item.currencyMycurrent}</h2>
        </div>
        <div className=" text-center">
          <h2>Rate {item.Rate}</h2>
        </div>

        <div className="flex gap-3 items-center lg:justify-center ">
          <h2 className="px-2 bg-gray-500 text-white py-1 rounded-md">
          {item.currencyTakecurrent}
          </h2>
          <h2 className="">{item.currencyTake} {item.currencyTakecurrent}</h2>
        </div>
        <div  className=" text-end">
          <button onClick={()=>{handleDelete(item.Id)}} className="btn btn-error px-2 py-0 text-white">Remove</button>
        </div>
      </div>
      </>

      <>
      
      
      </>
      </div>
      
 
    );
};

export default OrderItem;