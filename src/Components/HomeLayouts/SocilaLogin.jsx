import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocilaLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Login With</h1>
      <div className=" flex flex-col gap-4">
        {/* google */}
        <button className="btn btn-outline w-full btn-info hover:text-white"><FcGoogle size={24} /> Login With Google</button>
        
        {/* github */}
        <button className="btn btn-outline w-full btn-primary"><FaGithub size={24} /> Login With Github</button>
      </div>
    </div>
  );
};

export default SocilaLogin;
