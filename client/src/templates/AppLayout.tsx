import React from "react";
import WelcomeText from "../components/WelcomeText";
import Footer from "../components/Footer";
import ModalProvider from "../utils/ModalProvider";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleModalState } from "../store/slices/userSlice";

const AppLayout: React.FC = () => {
    const disptach = useDispatch();
    const modalState = useSelector((state: any) => state.userSlice.modalState);
    const hadleToggleModal = (state: boolean) => {
        disptach(toggleModalState(state));
    };

    return (
        <>
            <div className="h-full">
                <WelcomeText openModal={hadleToggleModal} />
            </div>
            <Footer />
            {modalState && (
                <ModalProvider>
                    <Modal closeModal={hadleToggleModal} />
                </ModalProvider>
            )}
        </>
    );
};

export default AppLayout;
