import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center pt-6 mb-2">
            Login your account
          </h1>
          <div className="border-b border-base-300"></div>
          <fieldset className="fieldset">
            <label className="label text-xl font-semibold">Email</label>

            <input type="email"
             className="input" 
             placeholder="Enter Your Email" />

            <label className="label text-xl font-semibold">Password</label>
            <input type="password"
             className="input"
              placeholder="Enter your password" />
            
            <button className="btn btn-neutral mt-4">Login</button>
            <div className="text-center mt-3">
              <p>Dont’t Have An Account ?<Link to='/auth/register' className="text-red-500 font-medium"> Register</Link></p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
