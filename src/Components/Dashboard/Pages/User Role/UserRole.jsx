import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseUser from '../../../../Hook/UseUser';
import UseAxious from '../../../../Hook/UseAxious';

const UserRole = () => {

  const [Users,isLoading,refetch] = UseUser()
  const Axious = UseAxious()


  const handleMakeAdmin = (email)=>{
      Axious.put(`/updateUser/${email}`)
      .then(res =>{
        refetch()
      })
  }

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="bg-gray-800 py-4">
        <h1 className="text-3xl text-center font-bold">Currency Dashboard</h1>
      </header>
      <main className="flex-1 p-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-6">Add New Currency</h2>

          {/* Add Users List Section */}
          <div className="overflow-x-auto mt-4">
      <div className="min-w-max sm:min-w-max">
        {/* Users Table */}
        <table className="bg-gray-800 p-4 w-full rounded-lg">
          <thead>
            <tr className="text-start">
              <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                User No
              </th>
              <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                Email
              </th>
              <th className="py-3 text-start pl-4 md:text-base sm:text-sm text-[12px]">
                Status
              </th>
              <th className="py-3 text-center pl-4 md:text-base sm:text-sm text-[12px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
                Users?.map((item,idx) => <tr key={item._id} className="text-start" >
                <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">{idx+1}</td>
                <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">{item?.email}</td>
                <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]">{item?.role}</td>
                <td className="py-2 pl-4 md:text-base sm:text-sm text-[12px]  flex justify-center items-center">
                   {
                    item?.role == 'Admin' ? <button disabled className="bg-blue-500 disabled:bg-blue-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">
                    Make Admin
                  </button> : <button onClick={()=>{handleMakeAdmin(item?.email)}} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded shadow">
                      Make Admin
                    </button>
                   }
                    

                </td>
              </tr>)
            }
              
            
          </tbody>
        </table>
      </div>
    </div>
        </div>
      </main>
      <ToastContainer></ToastContainer>
      <footer className="bg-gray-800 py-4 text-center">
        <p>© 2024 Currency Dashboard. All rights reserved.</p>
      </footer>
    </div>
    );
};

export default UserRole;
