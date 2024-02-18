import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <nav className="grid grid-cols-2 place-items-center py-3 border-b-2 border-neutral-700 ">
      <div className="flex justify-center items-center">
        <i>
          <img src="./src/assets/coder-logo.svg" alt="logo" width={256} />
        </i>
      </div>
      <div>
        {!isLoggedIn ? (
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
        ) : (
          <button
            className="flex items-center space-x-3"
            onClick={() => setOpenDropdown((preState) => !preState)}
          >
            <img
              src="/images/avater.jpg"
              alt="profile-picture"
              className="w-8 h-8 outline outline-blue-500 rounded-full"
            />
            <div className="relative">
              <p className="text-sm font-semibold">W.R.Middya</p>
              <p className="text-green-600 text-xs font-semibold">
                <span>●</span> online
              </p>
              {openDropdown && (
                <div className="border border-slate-200 py-2 px-4 transition-all space-y-2 rounded-lg absolute bg-white -bottom-16 text-sm ">
                  <ul>
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#" className="text-red-600">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
