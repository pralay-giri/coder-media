import { ChangeEventHandler, FC, useEffect, useState } from "react";
import Input from "./Input";

const Login: FC = () => {
  const [input, setInput] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log(input);
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="px-4">
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
      <div className="mt-6 mb-2 flex justify-center">
        <button
          type="submit"
          className="bg-violet-600 text-white font-semibold px-4 py-1 rounded-md hover:text-violet-700 hover:bg-white hover:outline hover:outline-1 hover:outline-violet-700 transition-all my-3"
        >
          Sign-In
        </button>
      </div>
    </div>
  );
};

export default Login;
