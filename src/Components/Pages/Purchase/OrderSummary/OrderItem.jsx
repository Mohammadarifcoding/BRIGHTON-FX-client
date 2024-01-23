

const OrderItem = ({item,allTheitem,setAllTheItem,handleDelete}) => {




    return (
      <div className="w-full">
        <>
             <div  key={item} className="lg:grid hidden lg:grid-cols-4 sm:grid-cols-2 grid-cols-2  bg-[#F5F8F7] border  items-center w-full justify-between gap-6 py-2 px-2">
        <div className="flex gap-5 items-center ">
          <h2 className="px-2 bg-gray-500  text-white py-1 rounded-md">
          {item.currencyTakecurrent}
          </h2>
          <h2 className="">{item.currencyTake} {item.currencyTakecurrent}</h2>
        </div>
        <div className=" text-center">
          <h2>Rate {item.Rate}</h2>
        </div>

        <div className="flex gap-3 items-center lg:justify-center ">

          <h2 className="">{item.currencyMy} {item.currencyMycurrent}</h2>
        </div>
        <div  className=" text-end">
          <button onClick={()=>{handleDelete(item.Id)}} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">Remove</button>
        </div>
      </div>
      </>

      <>
<div className=" lg:hidden block w-full p-4 bg-[#F5F8F7] border rounded-md shadow-sm" data-v0-t="card">
  <div className="flex flex-row justify-between items-center mb-1  ">
    <div className="flex gap-1 flex-col items-center">
          <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">{item.currencyTake} {item.currencyTakecurrent}</h3>
          <p className=" text-gray-500">Rate: {item.Rate}</p>
    </div>
    <h2 className="px-2 bg-gray-500  text-white py-1 rounded-md">
    {item.currencyTakecurrent}
          </h2>

  </div>
  <hr />
  <div className=" flex items-center justify-between mt-4">
    <div className="text-lg font-semibold">{item.currencyMy} {item.currencyMycurrent}</div>
    <button onClick={()=>{handleDelete(item.Id)}} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
      Remove
    </button>
  </div>
  
</div>

      
      </>
      </div>
      
 
    );
};

export default OrderItem;