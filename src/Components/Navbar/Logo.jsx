import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={'/'} className='relative'>
            <img src="https://i.ibb.co/mChD5RVr/Group-2.png" alt="logo icon" />
            <p className='font-bold absolute text-3xl top-3 left-5 '>ZapShift</p>
        </Link>
    );
};

export default Logo;