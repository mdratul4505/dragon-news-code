import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="flex gap-4 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex items-center gap-4">
                <img src={user} alt="" />
                <button className='btn btn-primary text-xl font-semibold text-base-100 px-10 py-2'>login</button>
            </div>
        </div>
    );
};

export default Navbar;