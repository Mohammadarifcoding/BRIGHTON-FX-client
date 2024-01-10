import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import UseAxious from "../../../../Hook/UseAxious";
import { Link } from "react-router-dom";


const CheckingPoint = ({setAddressSelected,setNextForm,nextFrom}) => {
  
    const [address , setAddress] = useState('location')
    const Axious = UseAxious()
  const [Order,setlastOrder] = useState({})
    const [selected,setSelected] = useState(false)

    
   
    const GetAddress = ()=>{
        if(address == 'location'){
        return toast('Select the checking point')
        }
      
        const dataFormLocalStorage = JSON.parse(localStorage.getItem('purchase'))
        if(dataFormLocalStorage?.length < 1){
          return toast('Please add currency item')
        }

       setAddressSelected(address)
      setNextForm(2)

    }


   const getFinishedOrder = (e)=>{
    e.preventDefault()
    try{
const First_Name = e.target.FirstName.value
      const Last_Name = e.target.LastName.value
      const Email = e.target.Email.value
      const Confrim_Email = e.target.ConfromEmail.value
      const Phone_Number = e.target.Number.value
     if(Email !== Confrim_Email){
      return toast('Emails doesnt match')
     }

      if(!selected){
        return toast('Please select the rules')
      }
     const UserInformation = {
      Order_Id: uuidv4(),
      Name :First_Name +' '+Last_Name,
      Email:Email,
      Phone_Number : Phone_Number,
      Address: address,
      Orders : JSON.parse(localStorage.getItem('purchase')),
      Status:'Pending'
     }
     
     Axious.post('/Order',UserInformation)
     .then(res =>{

      setlastOrder(UserInformation)
      localStorage.clear('purchase')

      setNextForm(3)
     })
    }
    catch{
      setNextForm(1)
      return toast('Something went wrong')
    }
      
     
    }


  return (
    <div className="mt-28">

      {
        nextFrom == 1 ? <>
        <h2 className="md:text-2xl sm:text-xl text-xl text-[#4A53A4]">
        Select a Collection Point
      </h2>


      <select value={address} onChange={(e)=>{setAddress(e.target.value)}} className=" mt-5 border-gray-500 w-full border px-2 py-2 rounded-lg outline-gray-500">
        <option value="location">Select locaiton</option>
        <option value="123 QUEENS ROAD BRIGHTON  BN1 3WB Number: 01273030708">123 QUEENS ROAD BRIGHTON  BN1 3WB Number: 01273030708</option>
        <option value="35 CHAPEL RD WORTHING BN11 1EG">35 CHAPEL RD WORTHING BN11 1EG</option>
      </select>

      <div className=" mt-5 flex  justify-end">
              <button onClick={GetAddress} className="flex bg-[#93C94E] px-5 py-3 hover:bg-[#678c36] hover:text-white gap-2">
                Next <span> + </span>
              </button>
            </div>
           
        </> :''
      }

      {
        nextFrom == 2 ? <>
        
         <h2 className="md:text-2xl sm:text-xl text-xl text-[#4A53A4]">Personal Details</h2>

         <form onSubmit={getFinishedOrder} className="flex flex-col">
            <input name="FirstName" required type="text"  placeholder="Enter First Name" className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md" />
            <input name="LastName" required type="text"  placeholder="Enter Last Name" className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md" />
            <input name="Email" required type="email"  placeholder="Enter Email" className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md" />
            <input name="ConfromEmail" required type="email"  placeholder="Confirm Email" className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md" />
            <input name="Number" required type="tel"  placeholder="Enter Number" className=" border mt-4 md:max-w-[500px] sm:w-full px-3 py-2 text-lg border-gray-400 focus:outline-none  rounded-md" />
            <h2 className="gap-2 flex items-center  mt-4 text-lg">
              {selected ? <IoIosCheckbox  className='text-2xl' onClick={()=>{setSelected(false)}}></IoIosCheckbox>:<MdOutlineCheckBoxOutlineBlank  onClick={()=>{setSelected(true)}} className='text-2xl'></MdOutlineCheckBoxOutlineBlank>}
            
            I accept all the rules
            </h2>

            <div className="flex  mt-3 md:max-w-[500px] sm:w-full justify-end">
                <button type="submit" onClick={GetAddress} className="flex bg-[#93C94E] px-5 py-3 hover:bg-[#678c36] hover:text-white gap-2">
                  Next +
                  </button>
            </div>
            
         </form>

        </>:''
      }
      {
        nextFrom == 3 ? <>
        <div className="bg-gray-100 py-10  px-6 ">
         <h2 className="md:text-4xl text-3xl text-center font-medium flex justify-center items-center gap-3"> <img className="w-10 md:block hidden" src="/Images/check-mark.png" alt="" />Your Order Confirmation</h2>
        <div className="flex md:flex-row flex-col items-start">
          <div className="mt-20 flex-1 gap-3 flex flex-col  ">
            <h2 className="mb-4 sm:text-2xl text-xl flex items-center gap-2 font-semibold">Personal Information <img className="w-6" src="/Images/contract.png" alt="" /></h2>
            <h2 className="sm:text-xl  "> <span className="font-medium">Name</span>:  {Order?.Name}</h2>
            <h2 className="sm:text-xl "> <span className="font-medium">Email</span>: {Order?.Email}</h2>
            <h2 className="sm:text-xl "> <span className="font-medium">Phone</span>: {Order?.Phone_Number}</h2>
          </div>
          <div className="mt-20 flex-1 gap-3 flex flex-col  ">
            <h2 className="mb-4 sm:text-2xl text-xl flex items-center gap-2 font-semibold">Order Information <img className="w-6" src="/Images/contract.png" alt="" /></h2>
            

            <h2 className="sm:text-xl"> <span className="font-semibold">Order Id </span>: {Order?.Order_Id}</h2>
            <h2 className="sm:text-xl my-2"> <span className="font-semibold">Checking Point </span>: {Order?.Address}</h2>
            {
              Order?.Orders?.map(item => <h2 className="sm:text-xl  ">You Give <span className="font-semibold">: {item?.currencyMy} {item?.currencyMycurrent}</span>  >>  You get  <span className="font-semibold">: {item?.currencyTake} {item?.currencyTakecurrent} </span>(Rate {(item?.Rate).toFixed(2)} )</h2>)
            }                    
          </div>
          </div>

          <div className="flex justify-center mt-20">
            <Link to='/'>
            <button className="btn bg-[#93C94E] px-5 py-3 hover:bg-[#678c36] hover:text-white">Got To Home</button>
            </Link>
            
          </div>
      
        </div>
        </>:''
      } 
      <ToastContainer></ToastContainer>
      
    </div>
  );
};

export default CheckingPoint;
