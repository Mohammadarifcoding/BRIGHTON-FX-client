import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const CheckingPoint = () => {
  
    const [address , setAddress] = useState('location')
   
    const buyProduct = ()=>{
        if(address == 'location'){
        return toast('Select the checking point')
        }
    }

  return (
    <div className="mt-28">
      <h2 className="md:text-2xl sm:text-xl text-xl text-[#4A53A4]">
        Select a Collection Point
      </h2>


      <select value={address} onChange={(e)=>{setAddress(e.target.value)}} className=" mt-5 border-gray-500 w-full border px-2 py-2 rounded-lg outline-gray-500">
        <option value="location">Select locaiton</option>
        <option value="Hall building ,Mirpur-10,Dhaka Bangladesh">Hall building ,Mirpur-10,Dhaka Bangladesh</option>
        <option value="Soil building ,Mirpur-10,Dhaka Bangladesh">Soil building ,Mirpur-10,Dhaka Bangladesh</option>
      </select>

      <div className=" mt-5 flex  justify-end">
              <button onClick={buyProduct} className="flex bg-[#93C94E] px-5 py-3 hover:bg-[#678c36] hover:text-white gap-2">
                Next <span> + </span>
              </button>
            </div>
            <ToastContainer></ToastContainer>
    </div>
  );
};

export default CheckingPoint;
