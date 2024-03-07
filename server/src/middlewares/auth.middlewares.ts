import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";

const verifyJWT = asyncHandler(
    async (req: Request, _: Response, next: NextFunction) => {
        // Extract the jwt token
        const token =
            req.cookies.accessToke ||
            req.header("Authorization")?.replace("Bearar ", "");

        // validate the existence of token
        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        // decode the token
        if (!process.env.ACCESS_TOKEN_SECRET) throw new ApiError(500, "Cannot access the secret");
        const decodedToken:any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

        if (!user) {
            throw new ApiError(404, "Invalid access token");
        }


        req.body.user = user
        next()
    }
);
