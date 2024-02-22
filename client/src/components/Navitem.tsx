import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavitemProps {
    url: string;
    children: ReactNode;
}

const Navitem: FC<NavitemProps> = ({ children, url }) => {
    return (
        <NavLink
            to={url}
            className={({ isActive }) =>
                (isActive ? "font-semibold text-purple-500 underline " : " ") +
                "text-lg hover:text-purple-500 transition-all relative "
            }
        >
            {children}
        </NavLink>
    );
};

export default Navitem;
