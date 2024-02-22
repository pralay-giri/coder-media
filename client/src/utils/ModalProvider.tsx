import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    children: ReactNode;
}

const ModalProvider = ({ children }: ModalProps): React.ReactPortal => {
    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = "auto";
        };
    }, []);

    return createPortal(
        children,
        document.querySelector("#modal-root") as HTMLDivElement
    );
};

export default ModalProvider;
