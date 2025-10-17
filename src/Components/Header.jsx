import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center mt-6'>
            <img  className='mx-auto' src={logo} alt="" />
            <p className='text-xl my-3 text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(),'EEEE , MMMM d , yyyy ')}</p>
        
        </div>
    );
};

export default Header;