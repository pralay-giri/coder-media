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
        <div className="relative my-4 group">
            <label
                htmlFor={label.toLocaleLowerCase()}
                className="absolute left-2 lowercase pointer-events-none transition-all group-focus-within:-top-3 group-focus-within:bg-red group-focus-within:text-sm group-focus-within:bg-[#191919] group-focus-within:text-blue-400"
            >
                {children}
            </label>
            <input
                type={type}
                onChange={inputChangeHandler}
                autoComplete="true"
                value={inputValue}
                className="w-full focus-visible:outline-1 focus-visible:outline-blue-400 focus-visible:shadow focus-visible:shadow-blue-400 border-none dark:bg-transparent outline outline-1 rounded-sm transition-all px-2 py-1"
                name={label}
            />
        </div>
    );
};

export default Input;
