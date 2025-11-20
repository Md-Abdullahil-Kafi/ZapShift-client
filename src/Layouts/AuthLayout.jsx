import React from 'react';
import Logo from '../Components/Navbar/Logo';
import { Outlet } from 'react-router';
import authLogo from "../assets/authImage.png";

const AuthLayout = () => {
    return (
        <div className='lg:w-7xl mx-auto'>
            <header className='my-3 '>
                <Logo></Logo>
            </header>
            <main className='flex flex-col-reverse md:flex-row'>
                <aside className='flex-1 flex justify-center items-center min-h-[70vh]'>
                    <Outlet></Outlet>
                </aside>
                <aside className='flex-1 flex justify-center items-center '>
                    <img className='w-[568px]' src={authLogo} alt="Auth Image" />
                </aside>
            </main>
        </div>
    );
};

export default AuthLayout;