import React from "react";
import Navitem from "./Navitem";

const Navbar: React.FC = () => {
  return (
    <nav
      className="grid grid-cols-2 place-items-center py-3 border-b-2 border-neutral-700 "
    >
      <div className="flex justify-center items-center">
        <i>
          <img src="./src/assets/coder-logo.svg" alt="logo" width={256}/>
        </i>
      </div>
      <div>
        <ul className="flex justify-center items-center space-x-10">
          <Navitem url="/">Home</Navitem>
          <Navitem url="/about">About</Navitem>
          <li>
            <button className="px-4 py-1 rounded-md bg-blue-500 text-white">
              SignIn
            </button>
          </li>
          <li>
            <button className="px-4 py-1 rounded-md bg-blue-500 text-white">
              SignUp
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
