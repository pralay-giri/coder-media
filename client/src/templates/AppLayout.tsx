import React from "react";
import WelcomeText from "../components/WelcomeText";
import Footer from "../components/Footer";
import ModalProvider from "../utils/ModalProvider";
import Modal from "./Modal";
import { useAppSelector } from "../hooks/appStoreHooks";

const AppLayout: React.FC = () => {
    const toggleModal = useAppSelector(({ modal: { toggle } }) => toggle);

    return (
        <>
            <div className="h-full">
                <WelcomeText />
            </div>
            <Footer />
            <ModalProvider>{toggleModal && <Modal />}</ModalProvider>
        </>
    );
};

export default AppLayout;
