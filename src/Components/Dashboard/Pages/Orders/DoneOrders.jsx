import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import UseAxious from "../../../../Hook/UseAxious";
import UseAcceptedOrder from "../../../../Hook/UseAcceptedOrder";
import  emailjs  from '@emailjs/browser';


const DoneOrders = () => {
    const [AcceptedOrder,RefetchAcceptedOrder] = UseAcceptedOrder()
    const Axious = UseAxious()
    
 
   
      const handleAcceptOrder = (orderId,Email,order) => {

        const UserInformation = {
          Order_Id: uuidv4(),
          Name: order?.Name,
          Email: Email,
          Phone_Number:order?.Phone_Number,
          Address: order?.Address,
          Orders:order?.Orders,
          CurrencyName:order?.Orders[0].currencyMycurrent,
          FxAmount:`${order?.Orders[0].currencyMy} ${order?.Orders[0].currencyMycurrent}`,
          Rate : order?.Orders[0].Rate,
          TotalMoney : `${order?.Orders[0].currencyTake} ${order?.Orders[0].currencyTakecurrent}`,
          Status: 'Pending'
      };

      console.log(UserInformation)
      const tempForm = document.createElement('form');
      tempForm.style.display = 'none';
      
      // Loop through the keys of the UserInformation object and create input fields
      for (const key in UserInformation) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = key;
        input.value = UserInformation[key];
        tempForm.appendChild(input);
      }
        console.log(tempForm)
        // Logic to accept the order with orderId
        
        // This function can update the order status or perform other actions
          Axious.put(`/acceptedToCompleted/${orderId}`)
          .then(res => {
            RefetchAcceptedOrder()
            emailjs.sendForm("service_geyk8rj","template_gt16753",tempForm,'-IllRWDI3WXoeT7lj')
            .then(res=>{
              console.log('email send')
            })
        .then(res => {
          console.log(res)
        })
          })
      };
    
   
    
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="bg-gray-800 py-4">
        <h1 className="text-3xl text-center font-bold">Accepted Orders</h1>
      </header>
      <main className="flex-1 p-6 mt-10">
      <div className="overflow-x-auto mt-4">
        <div className="min-w-max sm:min-w-max">
          {/* Option for admin to set percentage increase */}
 
  
          {/* Currency Table */}
          <table className="bg-gray-800 p-4 w-full rounded-lg">
            <thead>
              <tr className="text-start">
                <th className="py-3 pl-4 text-start">Name</th>
                <th className="py-3 pl-4 text-start">Email</th>
                <th className="py-3 pl-4 text-start">Phone Number</th>
                <th className="py-3 pl-4 text-start">Details</th>
                <th className="py-3 pl-4 text-start">Status</th>
                <th className="py-3 pl-4 text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              {AcceptedOrder?.map((order) => (
                <tr key={order?._id} className="text-start">
                  <td className="py-2 pl-4">{order?.Name}</td>
                  <td className="py-2 pl-4">{order?.Email}</td>
                  <td className="py-2 pl-4">{order?.Phone_Number}</td>
                  
                  <td>
                    <Link to={`/dashboard/orderDetails/${order?._id}`}>
                    <button
                      className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                      Details
                    </button>
                    </Link>
                  
                  </td>
                  <td className="py-2 pl-4">
                   Accepted
                   
                  </td>
                  <td className="">
                   <button
                   onClick={()=>{
                    handleAcceptOrder(order?._id,order?.Email,order)
                   }}
                      className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                     Completed
                    </button>
                   
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </main>
      <footer className="bg-gray-800 py-4 text-center">
        <p>© 2024 Orders Dashboard. All rights reserved.</p>
      </footer>
    </div>
    );
};

export default DoneOrders;