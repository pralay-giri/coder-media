import { ChangeEventHandler, FC, SyntheticEvent, useState } from "react";
import Input from "./Input";

const Login: FC = () => {
    const [input, setInput] = useState<{ username: string; password: string }>({
        username: "",
        password: "",
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
                inputValue={input?.username}
            >
                Username
            </Input>
            <Input
                label="password"
                type="password"
                inputChangeHandler={handleInputChange}
                inputValue={input?.password}
            >
                password
            </Input>
            <div className="w-full my-4">
                <button
                    type="submit"
                    className="w-full  bg-violet-600 text-white font-semibold px-4 py-2 rounded-md hover:text-violet-700 hover:bg-white hover:outline hover:outline-1 hover:outline-violet-700 transition-all"
                >
                    Sign-In
                </button>
            </div>
        </form>
    );
};

export default Login;
