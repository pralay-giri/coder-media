import { Dispatch, SetStateAction, useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

interface ModalProps {
  closeModal: Dispatch<SetStateAction<boolean>>
}

function Modal({closeModal}:ModalProps) {
  const [toggle, setToggle] = useState<boolean>(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="w-[25%] rounded-md shadow-lg fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white border border-neutral-200 px-4 py-1 z-50">
        <button className="my-3 float-end relative right-2 active:scale-90" onClick={() => closeModal(false)}>
          {/* <i className="fa-light fa-xmark" /> */}
          <svg viewBox="0 0 24 24" width={18} style={{cursor: "pointer"}}>
            <path 
              fill="none"
              stroke="#1f1f1f"
              d="M 2 2 L 20 24"
              />
            <path 
              fill="none"
              stroke="#1f1f1f"
              d="M 20 2 L 2 24"
              />
          </svg>
        </button>
        <div className="w-full grid grid-cols-2 place-items-center list-none mb-3">
          <li>
            <button
              className={`py-1 px-14  rounded-md transition ${
                toggle ? "bg-neutral-800 text-white" : "text-black bg-gray-200"
              }`}
              onClick={toggleHandler}
            >
              SignIn
            </button>
          </li>
          <li>
            <button
              className={`py-1 px-12  rounded-md transition ${
                toggle ? "text-black bg-gray-200" : "bg-neutral-800 text-white"
              }`}
              onClick={toggleHandler}
            >
              SignUp
            </button>
          </li>
        </div>
        <div>
          {toggle ? <Login /> : <Signup />}
        </div>
      </div>
      <div
        id="overlay"
        className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-[2px] pointer-events-auto"
      />
    </>
  );
}

export default Modal;
