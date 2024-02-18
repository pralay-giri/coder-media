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
    <div className="flex justify-between items-center space-y-2">
      <label htmlFor={label.toLocaleLowerCase()}>{children}</label>
      <input
        type={type}
        onChange={inputChangeHandler}
        value={inputValue}
        className="border-2 border-neutral-400 rounded-md w-[50%] p-[1px]"
        name={label}
      />
    </div>
  );
};

export default Input;
