import axios, { AxiosError } from "axios";

type signUpData = {
    userName: string;
    email: string;
    password: string;
    profile: File | null;
    fullName: string;
};

export const signUpHandler = async (creaditional: signUpData) => {
    try {
        console.log(creaditional);
        const payload = new FormData();
        payload.set("fullName", creaditional.fullName);
        payload.set("userName", creaditional.userName);
        payload.set("email", creaditional.email);
        payload.set("password", creaditional.password);
        payload.set("avater", creaditional.profile as any);
        console.log(payload.get("password"));
        const rensponse = await axios.post("/api/user/register", payload);
        return rensponse;
    } catch (error) {
        return error;
    }
};
