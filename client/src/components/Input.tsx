import { ChangeEventHandler, FC, ReactNode } from "react";

interface InputProps {
    children?: ReactNode;
    label: string;
    type: string;
    inputValue: string;
    inputChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
    children,
    label,
    type,
    inputChangeHandler,
    inputValue,
}) => {
    return (
        <div className="grid grid-flow-col justify-between items-center space-y-2">
            <label htmlFor={label.toLocaleLowerCase()}>{children}</label>
            <input
                type={type}
                onChange={inputChangeHandler}
                value={inputValue}
                className="w-full focus-visible:outline-1 focus-visible:outline-blue-400 focus-visible:shadow focus-visible:shadow-blue-400 border-none dark:bg-transparent outline outline-1 rounded-sm transition-all px-2 py-1"
                name={label}
            />
        </div>
    );
};

export default Input;
