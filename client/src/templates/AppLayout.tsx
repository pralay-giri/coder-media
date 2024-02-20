import React, { useState } from "react";
import WelcomeText from "../components/WelcomeText";
import Footer from "../components/Footer";
import ModalProvider from "../utils/ModalProvider";
import Modal from "./Modal";

const AppLayout: React.FC = () => {
    const [toggleModal, setToggleModal] = useState<boolean>(false);

    return (
        <>
            <div className="h-full">
                <WelcomeText openModal={setToggleModal} />
            </div>
            <Footer />
            <ModalProvider>
                {toggleModal && <Modal closeModal={setToggleModal} />}
            </ModalProvider>
        </>
    );
};

export default AppLayout;
