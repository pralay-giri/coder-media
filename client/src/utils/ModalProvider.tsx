import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

interface ModalProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProps) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement("div")

  useEffect(() => {
    const el = elRef.current!;
    modalRoot.appendChild(el);

    console.log(modalRoot);
    

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return createPortal(children, elRef.current);
};

export default ModalProvider;
