import { useEffect, useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { RxCross2 } from "react-icons/rx";
import { useAppDispatch } from "../hooks/appStoreHooks";
import { toggleClose } from "../store/slices/toggleModalSlice";

function Modal() {
    const [toggle, setToggle] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {}, []);

    const toggleHandler = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className="w-[26%] rounded-md shadow-lg fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white border border-neutral-200 px-4 py-1 z-50 dark:bg-[#191919] dark:text-white">
                <button
                    className="my-3 float-end relative right-2 active:scale-90 text-xl"
                    onClick={() => dispatch(toggleClose())}
                >
                    <RxCross2 />
                </button>
                <div className="my-5">{toggle ? <Login /> : <Signup />}</div>
                <div className="w-full grid grid-cols-2 place-items-center list-none mb-3">
                    <button
                        className={`py-1 px-14  rounded-md transition-all bg-neutral-800 text-white ${
                            toggle
                                ? "pointer-events-none opacity-70"
                                : "dark:text-black dark:bg-white text-white"
                        }`}
                        onClick={toggleHandler}
                    >
                        SignIn
                    </button>
                    <button
                        className={`py-1 px-12 rounded-md transition-all bg-neutral-800 text-white ${
                            toggle
                                ? "dark:text-black dark:bg-white text-white"
                                : "pointer-events-none opacity-70"
                        }`}
                        onClick={toggleHandler}
                    >
                        SignUp
                    </button>
                </div>
            </div>
            <div
                id="overlay"
                className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)]  backdrop-blur-[2px] pointer-events-auto"
            />
        </>
    );
}

export default Modal;
