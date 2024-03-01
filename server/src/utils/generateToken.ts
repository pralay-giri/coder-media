import jwt from "jsonwebtoken";
import { tokenPayloadInfer } from "../@types";

export const generateToken = (
    payload: tokenPayloadInfer,
    secret: string,
    expiry?: string
) => {
    return jwt.sign(payload, secret, {
        expiresIn: expiry || "1d",
    });
};
