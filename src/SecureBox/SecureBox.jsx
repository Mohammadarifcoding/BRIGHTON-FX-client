import { useContext, useState } from 'react';
import { AuthContext } from '../Components/Providers/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';

const SecureBox = () => {
    const {AdminAcess,setAdminAcess} = useContext(AuthContext)
  const [userName, setUserName] = useState('');
  const nav = useNavigate()
  const location = useLocation()
  const [userPassword, setUserPassword] = useState('');
  const from = location?.state?.from?.pathname || '/'

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleAccess = () => {
    // Implement authentication logic here

    if(userName == 'brightonfx' && userPassword =='Acess123'){
      
        nav(from, { replace: true });
        setAdminAcess(true)
        return
    }
    nav('/')
    
    // You can perform validation or authentication checks with this data
  };

  return (
    <div className="h-screen w-screen bg-[#465d66] flex justify-center items-center text-white">
      <div className="bg-gray-800 p-6 rounded-md">
        <h2 className="text-2xl mb-4">Secure Box</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4  md:w-[500px] sm:w-[450px] w-[300px]">
            <label htmlFor="userName" className="block text-sm mb-1">
              Username:
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
              className="w-full p-2 border rounded-md text-black"
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="userPassword" className="block text-sm mb-1">
              Password:
            </label>
            <input
              type="password"
              id="userPassword"
              value={userPassword}
              onChange={handleUserPasswordChange}
              className="w-full p-2 border rounded-md text-black"
            />
          </div>
          <button onClick={handleAccess} className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default SecureBox;
