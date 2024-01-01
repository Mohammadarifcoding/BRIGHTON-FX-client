

const OrderItem = ({item,allTheitem,setAllTheItem,handleDelete}) => {

    //  const handleDelete = (id)=>{
    //     const previousData = JSON.parse(localStorage.getItem('purchase'))
    //     const newData = previousData.filter(item => item.id !== id)
    //     localStorage.setItem('purchase',JSON.stringify(newData))
    //  }


    return (
        <div onClick={()=>{handleDelete(item.id)}} key={item} className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2  bg-gray-200 items-center w-full justify-between gap-6 p-3">
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
    );
};

export default OrderItem;