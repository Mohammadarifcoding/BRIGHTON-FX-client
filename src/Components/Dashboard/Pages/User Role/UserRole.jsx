import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRole = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <header className="bg-gray-800 py-4">
                <h1 className="text-3xl text-center font-bold">Currency Dashboard</h1>
            </header>
            <main className="flex-1 p-6 mt-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-medium mb-6">Add New Currency</h2>
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
