import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"


const CheckingPoint = ({setAddressSelected,setNextForm,nextFrom}) => {
  
    const [address , setAddress] = useState('location')

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
      Name :First_Name + ' '+Last_Name,
      Email:Email,
      Phone_Number : Phone_Number,
      Orders : JSON.parse(localStorage.getItem('purchase'))
     }
     console.log(UserInformation)
     setNextForm(3)
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
        <option value="Hall building ,Mirpur-10,Dhaka Bangladesh">Hall building ,Mirpur-10,Dhaka Bangladesh</option>
        <option value="Soil building ,Mirpur-10,Dhaka Bangladesh">Soil building ,Mirpur-10,Dhaka Bangladesh</option>
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
        f
        </>:''
      } 
      <ToastContainer></ToastContainer>
      
    </div>
  );
};

export default CheckingPoint;
