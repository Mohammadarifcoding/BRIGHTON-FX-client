import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAxious from '../../../Hook/UseAxious';

const SignUp = () => {
    const { Google, OUT, creatUser } = useContext(AuthContext);
    const nav = useNavigate();
    const Axious = UseAxious()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email == '') {
            toast('Enter an email');
            return;
        }
        if (password == '') {
            toast('Enter a password');
            return;
        }
        creatUser(email, password)
            .then((res) => {
                console.log(res.user);
                Axious.post('/user',{email: res?.user?.email,role:'user'})
                .then(res =>{
                 console.log(res.data)
                 nav(from, { replace: true });
                 toast('User logged in');
                })
                .catch(error => {
                 console.log(error)
                 OUT()
                 .then()
                 .catch()
                 toast('Something went wrong')
                })
            })
            .catch((res) => {
                console.log(res.error);
                toast('Something went wrong');
            });
    };

    const GoogleSignIn = () => {
        Google()
            .then((res) => {
                console.log(res.user);
                Axious.post('/user',{email: res?.user?.email,role:'user'})
                .then(res =>{
                 console.log(res.data)
                 nav(from, { replace: true });
                 toast('User logged in');
                })
                .catch(error => {
                 console.log(error)
                 OUT()
                 .then()
                 .catch()
                 toast('Something went wrong')
                })
            })
            .catch((res) => {
                console.log(res.error);
                toast('Something went wrong');
            });
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
            <div className="border text-card-foreground w-full max-w-md px-4 py-8 m-3 bg-white rounded-lg shadow-md ">
                <form onSubmit={handleSubmit} data-v0-t="card">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="tracking-tight text-3xl text-center font-bold text-gray-900 ">Welcome You!</h3>
                        <p className="text-sm text-center text-gray-500 ">We are happy to see you here. Thanks for coming</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="space-y-2">
                            <label className=" text-sm font-medium text-gray-900 " htmlFor="email">
                                Email
                            </label>
                            <input
                                className="flex h-10 bg-background text-sm fing  w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:border-blue-500 "
                                id="email"
                                placeholder="you@example.com"
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className=" text-sm font-medium text-gray-900 " htmlFor="password">
                                Password
                            </label>
                            <input
                                className="flex h-10 bg-background text-sm fing  w-full px-3 py-2 border border-gray-300 rounded-md  focus:outline-none focus:border-blue-500 "
                                id="password"
                                name="password"
                                type="password"
                            />
                        </div>
                    </div>
                    <div className="flex items-center px-6 my-1">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center text-sm font-medium   h-10 px-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                        >
                            Let's Go!
                        </button>
                    </div>
                </form>
                <div className="flex items-center px-6 my-2">
                    <button
                        onClick={GoogleSignIn}
                        type="submit"
                        className="inline-flex items-center justify-center text-sm font-medium   h-10 px-4 w-full py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-md  focus:outline-none "
                    >
                        Continue with Google
                    </button>
                </div>
                <h2 className='text-center mt-6'>Already User here ? <Link className='text-blue-600' to={'/signin'}>Sign In</Link></h2>
            </div>

            <ToastContainer></ToastContainer>
        </main>
    );
};

export default SignUp;
