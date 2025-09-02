import React from "react";
import logo from "../../assets/clogo.png";
import { Link } from "react-router";

const CouriereLogo = () => {
  return (
    <Link to="/" className="btn btn-ghost text-xl flex items-end gap-2">
      <img className="w-[35px]  rounded-lg" src={logo} alt="Logo" />
      <p className="text-2xl font-bold text-green-400 ml-0">Courier-Net</p>
    </Link>
  );
};

export default CouriereLogo;
