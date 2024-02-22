import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";
import { PiMoonStarsFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { initTheme, changeTheme } from "../store/slices/preferanceSlice";
import { toggleModalState } from "../store/slices/userSlice";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { Link } from "react-router-dom";
type Mode = "LIGHT" | "DARK" | "SYSTEM";

const Navbar: React.FC = () => {
    const dispatch: Dispatch = useDispatch();

    const theme = useSelector(
        (store: any): string => store.preferanceSlice.mode
    );

    const isUserOuthenticated = useSelector(
        (store: any): string => store.userSlice.isUserOuthenticated
    );

    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const [isThemeModalVisible, setIsThemeModalVisible] =
        useState<boolean>(false);

    useEffect(() => {
        dispatch(initTheme());
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

    const showModal = () => {
        dispatch(toggleModalState(true));
    };

    const handleThemeModal = () => {
        setIsThemeModalVisible((prev) => !prev);
    };

    return (
        <nav className="flex items-center justify-between px-10 py-3 border border-b-2 border-neutral-700 dark:bg-[#191919] dark:*:text-white">
            <Link to="/" className="flex justify-center items-center ">
                <i>
                    <img
                        src="./src/assets/coder-logo.svg"
                        alt="logo"
                        width={256}
                    />
                </i>
            </Link>
            <div className="flex items-center gap-5">
                <ul className="flex justify-center items-center space-x-10">
                    <li>
                        <Navitem url="/">Home</Navitem>
                    </li>
                    <li>
                        <Navitem url="/about">About</Navitem>
                    </li>
                    <li>
                        <Navitem url="/dashboard">Dashboard</Navitem>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-5">
                {isUserOuthenticated ? (
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
                ) : (
                    <div>
                        <button
                            className="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 text-white"
                            onClick={showModal}
                        >
                            Join
                        </button>
                    </div>
                )}
                <div>
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
                        <div className="p-1 rounded-lg absolute top-16 right-0 bg-white dark:bg-[#191919] dark:shadow-sm dark:shadow-stone-50 border dark:border  shadow-lg flex flex-col gap-2 *:flex *:items-center *:gap-1 *:p-1 *:rounded-md *:transition-all *:text-lg">
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
