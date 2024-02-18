import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavitemProps  {
    url: string
    children: ReactNode
}

const Navitem: FC<NavitemProps> = ({ children, url }) => {
  return (
    <>
      <li>
        <NavLink
          to={url}
          className={({ isActive }) =>
            (isActive ? "font-semibold underline " : "") + "text-lg"
          }
        >
          {children}
        </NavLink>
      </li>
    </>
  );
};

export default Navitem;
