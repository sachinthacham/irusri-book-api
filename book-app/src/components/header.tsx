import React from "react";
import logo from "../assets/booklogo.png";

const Header: React.FC = () => {
  return (
    <header className="text-white p-4 text-center fixed w-full z-[-5]">
      <div className="flex gap-4 items-center">
        <img
          src={logo}
          alt=""
          height={100}
          width={100}
          className="relative  bottom-5"
        />
        <p className="relative bottom-6 right-6 text-[20px] font-bold text-orange-500">
          Bookscape
        </p>
      </div>
    </header>
  );
};

export default Header;
