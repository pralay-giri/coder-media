import { ChangeEventHandler, FC, SyntheticEvent, useState } from "react";
import Input from "./Input";

interface InputStateInterface {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Signup: FC = () => {
    const [input, setInput] = useState<InputStateInterface>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
        target: { name, value },
    }) => {
        setInput({ ...input, [name]: value });
    };

    const handleFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <form className="px-4" onSubmit={handleFormSubmit}>
            <Input
                label="username"
                type="text"
                inputChangeHandler={handleInputChange}
                inputValue={input.username}
            >
                Username
            </Input>
            <Input
                label="email"
                type="email"
                inputChangeHandler={handleInputChange}
                inputValue={input.email}
            >
                email
            </Input>
            <Input
                label="password"
                type="password"
                inputChangeHandler={handleInputChange}
                inputValue={input.password}
            >
                Password
            </Input>
            <Input
                label="confirm-password"
                type="password"
                inputChangeHandler={handleInputChange}
                inputValue={input.confirmPassword}
            >
                Confirm Password
            </Input>
            <div className="my-3">
                <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4 file:rounded-md
                      file:border-0 file:text-sm file:font-semibold
                      file:bg-pink-200 file:text-pink-700
                      hover:file:bg-pink-300 file:cursor-pointer"
                />
            </div>
            <div className="mt-6 mb-2 flex justify-center">
                <button
                    type="submit"
                    className="w-full bg-violet-600 text-white font-semibold px-4 py-2 rounded-md hover:text-violet-700 hover:bg-white hover:outline hover:outline-1 hover:outline-violet-700 transition-all my-3"
                >
                    Sign-Up
                </button>
            </div>
        </form>
    );
};

export default Signup;
