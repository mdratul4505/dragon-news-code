import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContest , logOut } from "../Provider/AuthProvaider";

const Navbar = () => {
  const { user } = use(AuthContest);
  const handelLogout = () =>{
    console.log('button is clicked')
    logOut()
  }
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <img src={userImg} alt="" />

        {user ? (
          <Link onClick={handelLogout}
            
            className="btn btn-primary text-xl font-semibold text-base-100 px-10 py-2"
          >
            logout
          </Link>
        ) : (
          <Link 
            to="/auth/login"
            className="btn btn-primary text-xl font-semibold text-base-100 px-10 py-2"
          >
            login
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
