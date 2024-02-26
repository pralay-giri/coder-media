import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavitemProps {
    url: string;
    children: ReactNode;
}

const Navitem: FC<NavitemProps> = ({ children, url }) => {
    return (
        <>
            <li>
                <NavLink
                    to={url}
                    className={({ isActive }) =>
                        (isActive ? "text-orange-700 " : "") +
                        "text-lg transition-all hover:text-orange-700 font-semibold"
                    }
                >
                    {children}
                </NavLink>
            </li>
        </>
    );
};

export default Navitem;
