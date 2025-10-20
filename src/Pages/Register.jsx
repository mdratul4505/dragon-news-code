import React, { use } from "react";
import { Link } from "react-router";
import { AuthContest } from "../Provider/AuthProvaider";

const Register = () => {
  const { creatUser , setUser } = use(AuthContest);
  const handelRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const photo = from.photo.value;
    const email = from.email.value;
    const password = from.password.value;

    console.log(name, photo, email, password);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center pt-6 mb-2">
            Register your account
          </h1>
          <div className="border-b border-base-300"></div>
          <form onSubmit={handelRegister}>
            <fieldset className="fieldset">
              <label className="label text-xl font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter Name"
                required
              />

              <label className="label text-xl font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Enter your Photo URL"
                required
              />

              <label className="label text-xl font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Your Email"
                required
              />

              <label className="label text-xl font-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <div className="text-center mt-3">
                <p className="">
                  Allready Have An Account ?
                  <Link to="/auth/login" className="text-red-500 font-medium">
                    {" "}
                    Login
                  </Link>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
