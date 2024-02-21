import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";
import { PiMoonStarsFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { initTheme, changeTheme } from "../store/preferanceSlice";
import { HiMiniComputerDesktop } from "react-icons/hi2";
type Mode = "LIGHT" | "DARK" | "SYSTEM";

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector(
        (store: any): string => store.preferanceSlice.mode
    );
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const [isThemeModalVisible, setIsThemeModalVisible] =
        useState<boolean>(false);

    useEffect(() => {
        dispatch(initTheme() as any);
    }, []);

    const handleTheme = (mode: Mode) => {
        switch (mode) {
            case "DARK": {
                dispatch(changeTheme("DARK") as any);
                setIsThemeModalVisible((prev) => !prev);
                break;
            }
            case "LIGHT": {
                dispatch(changeTheme("LIGHT") as any);
                setIsThemeModalVisible((prev) => !prev);
                break;
            }
            case "SYSTEM": {
                dispatch(changeTheme("SYSTEM") as any);
                setIsThemeModalVisible((prev) => !prev);
                break;
            }
        }
    };

    const handleThemeModal = () => {
        setIsThemeModalVisible((prev) => !prev);
    };

    return (
        <nav className="grid grid-cols-2 place-items-center py-3 border-b-2 border-neutral-700 dark:bg-[#191919] dark:*:text-white">
            <div className="flex justify-center items-center">
                <i>
                    <img
                        src="./src/assets/coder-logo.svg"
                        alt="logo"
                        width={256}
                    />
                </i>
            </div>
            <div className="flex items-center gap-5">
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
                            <p className="text-green-600 text-xs font-semibold text-left">
                                <span>●</span> online
                            </p>
                            {openDropdown && (
                                <div className="border border-slate-200 py-2 px-4 transition-all space-y-2 rounded-lg absolute bg-white -bottom-16 text-sm ">
                                    <ul>
                                        <li>
                                            <a href="#">Profile</a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-red-600"
                                            >
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </button>
                )}
                <div className="">
                    {theme === "DARK" ? (
                        <IoSunny
                            onClick={handleThemeModal}
                            className="cursor-pointer text-2xl hover:opacity-85 transition-opacity"
                        />
                    ) : (
                        <PiMoonStarsFill
                            onClick={handleThemeModal}
                            className="cursor-pointer text-2xl hover:opacity-85 transition-opacity"
                        />
                    )}
                    {isThemeModalVisible && (
                        <div className="p-1 rounded-lg absolute bg-white dark:bg-[#191919] dark:shadow-sm dark:shadow-stone-50 border dark:border  shadow-lg flex flex-col gap-2 *:flex *:items-center *:gap-1 *:p-1 *:rounded-md *:transition-all *:text-lg">
                            <button
                                onClick={() => handleTheme("DARK")}
                                className="hover:bg-gray-200 dark:hover:text-[#191919]"
                            >
                                <PiMoonStarsFill />
                                <span>Dark</span>
                            </button>
                            <button
                                onClick={() => handleTheme("LIGHT")}
                                className="hover:bg-gray-200 dark:hover:text-[#191919]"
                            >
                                <IoSunny />
                                <span>Light</span>
                            </button>
                            <button
                                onClick={() => handleTheme("SYSTEM")}
                                className="hover:bg-gray-200 dark:hover:text-[#191919]"
                            >
                                <HiMiniComputerDesktop />
                                <span>System</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
