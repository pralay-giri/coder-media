import {
    ChangeEvent,
    ChangeEventHandler,
    FC,
    FormEventHandler,
    useEffect,
    useRef,
    useState,
} from "react";
import Input from "./Input";
import { FULLNAME_REGX, defaultProfile } from "../utils/constant";
import { IoCameraOutline } from "react-icons/io5";
import { signUpHandler } from "../helper/signUphandler";
import { EMAIL_REGX, PASSWORD_REGX, USER_NAME_REGX } from "../utils/constant";
import { AxiosError, AxiosResponse } from "axios";

interface InputStateInterface {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
}

const Signup: FC = () => {
    const [input, setInput] = useState<InputStateInterface>({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const profileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedImageLink, setSelectedImageLink] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setIsLoadding] = useState<boolean>(false);

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
        target: { name, value },
    }) => {
        setInput({ ...input, [name]: value });
    };

    const handleFile = (): void => {
        if (!profileInputRef.current) return;
        profileInputRef.current.click();
    };

    const handleSelectedProfile = (e: ChangeEvent<HTMLInputElement>) => {
        // previewing the image that user select
        e.preventDefault();
        if (!e.target.files?.[0]) return;
        setSelectedFile(e.target.files?.[0]);
        const imageLInk = URL.createObjectURL(e.target.files[0]);
        setSelectedImageLink(imageLInk);
    };

    useEffect(() => {
        // revocking the generated link for image
        return () => {
            if (!selectedImageLink) return;
            URL.revokeObjectURL(selectedImageLink);
        };
    });

    const handleSignUp: FormEventHandler = async (e) => {
        e.preventDefault();

        let error: string = "";
        if (!FULLNAME_REGX.test(input.fullName))
            error = "not a valid full name ex:john doe";
        else if (!USER_NAME_REGX.test(input.userName))
            error =
                "userName start with @ and contains lower and uppercase later and 0-9";
        else if (!EMAIL_REGX.test(input.email))
            error = "gmail not valid ex:example@gmail.com";
        else if (!PASSWORD_REGX.test(input.password))
            error = "minimum length of password can be 6";
        else if (!selectedFile) error = "select a profile photo";
        else if (input.password !== input.confirmPassword)
            error = "password and current password need to be same";
        if (error.trim().length) {
            setError(error);
            return;
        } else setError("");

        setIsLoadding(true);
        await signUpHandler({
            ...input,
            profile: selectedFile,
        });
        setIsLoadding(false);
    };

    return (
        <form className="px-4" onSubmit={handleSignUp}>
            <div
                className="relative my-5 mx-auto w-20 h-20 rounded-full flex items-center justify-center cursor-pointer overflow-hidden hover:brightness-75 transition-all border-2 dark:border-gray-300 border-gray-600"
                onClick={handleFile}
            >
                <img
                    src={selectedImageLink || defaultProfile}
                    alt="logo"
                    className={`rounded-full object-cover object-center scale-105 ${
                        !selectedImageLink && "brightness-50"
                    }`}
                />
                {!selectedImageLink && (
                    <div className="overlay absolute *:text-xl text-white">
                        <IoCameraOutline />
                    </div>
                )}
                <input
                    type="file"
                    name="avater"
                    ref={profileInputRef}
                    id="profile-input"
                    accept="image/*"
                    className="hidden"
                    onChange={handleSelectedProfile}
                />
            </div>
            <Input
                label="fullName"
                type="text"
                inputChangeHandler={handleInputChange}
                inputValue={input.fullName}
            >
                full name
            </Input>
            <Input
                label="userName"
                type="text"
                inputChangeHandler={handleInputChange}
                inputValue={input.userName}
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
                label="confirmPassword"
                type="password"
                inputChangeHandler={handleInputChange}
                inputValue={input.confirmPassword}
            >
                Confirm password
            </Input>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="my-1 flex justify-center">
                <button
                    type="submit"
                    className={`w-full bg-violet-600 text-white font-semibold px-4 py-2 rounded-md hover:text-violet-700 hover:bg-white hover:outline hover:outline-1 hover:outline-violet-700 transition-all my-3 ${
                        loading &&
                        "bg-white text-violet-600 pointer-events-none"
                    }`}
                >
                    {loading ? "loadding..." : "Sign-Up"}
                </button>
            </div>
        </form>
    );
};

export default Signup;
