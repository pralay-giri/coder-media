import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";
import { PiMoonStarsFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
import { initTheme, changeTheme } from "../store/slices/preferanceSlice";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { toggleOpen } from "../store/slices/toggleModalSlice";
import { useAppDispatch, useAppSelector } from "../hooks/appStoreHooks";
import ProfileCard from "./ProfileCard";
import ModalProvider from "../utils/ModalProvider";

type Mode = "LIGHT" | "DARK" | "SYSTEM";

const Navbar: React.FC = () => {
    const theme = useAppSelector((state) => state.preferance.mode);
    const dispatch = useAppDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const [isOnline] = useState<boolean>(true);
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

    const handleOpenModal = () => {
        dispatch(toggleOpen());
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
                <ul className="flex justify-center items-center space-x-10">
                    <Navitem url="/">Home</Navitem>
                    <Navitem url="/about">About</Navitem>
                    {isLoggedIn ? (
                        <li className="relative">
                            <button
                                className="flex items-center gap-2"
                                onClick={() =>
                                    setOpenDropdown((preState) => !preState)
                                }
                            >
                                <img
                                    src="/images/avater.jpg"
                                    alt="profile-picture"
                                    className={`w-8 h-8 outline outline-gray-600 rounded-full ${
                                        isOnline && "relative outline-green-500"
                                    }`}
                                />
                                <p className="text-[0.8rem] font-semibold w-8/12 overflow-hidden text-ellipsis text-nowrap lowercase">
                                    W.R.Middya
                                </p>
                            </button>
                            {openDropdown && (
                                <ModalProvider>
                                    <ProfileCard
                                        closeModal={() =>
                                            setOpenDropdown((prev) => !prev)
                                        }
                                        logout={() =>
                                            setIsLoggedIn((prev) => !prev)
                                        }
                                    />
                                </ModalProvider>
                            )}
                        </li>
                    ) : (
                        <li>
                            <button
                                className="px-4 py-1 rounded-md outline-none border-black bg-blue-400 text-white hover:shadow hover:shadow-blue-400 hover:border-blue-400 focus-visible:outline-white"
                                onClick={handleOpenModal}
                            >
                                Join
                            </button>
                        </li>
                    )}
                </ul>
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
