import React from "react";
import { Outlet } from "react-router";
import authentication from "../../assets/authImage.png";
import CouriereLogo from "../../Shared/CouriereLogo/CouriereLogo";

const AuthenticationLayOut = () => {
  return (
    <div className=" px-6 py-6 flex flex-col">
      {/* Logo */}
      <div className="mb-6 flex">
        <CouriereLogo />
      </div>

      {/* Main Section */}
      <div className="flex flex-1 items-center justify-center">
        <div className="hero-content flex flex-col lg:flex-row-reverse w-full max-w-6xl gap-10">
          
          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={authentication}
              alt="Authentication Illustration"
              className="max-w-sm w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Form Section */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayOut;
