import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold my-5">Find Us On </h1>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 join-item justify-start"><FaFacebook /> Facebook</button>
          <button className="btn bg-base-100 join-item justify-start"><FaTwitter /> Twitter</button>
          <button className="btn bg-base-100 join-item justify-start"><FaInstagramSquare /> Instragram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
