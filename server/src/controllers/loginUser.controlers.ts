import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { loginInfer, tokenPayloadInfer } from "../@types";
import { User } from "../models/user.models";
import bcrypt from "bcryptjs";
import { ApiError } from "../utils/ApiError";
import { generateToken } from "../utils/generateToken";
import { ApiResponse } from "../utils/ApiResponse";

interface TypedRequest<T> extends Request {
    body: T;
}

export const loginUser = asyncHandler(
    async (req: TypedRequest<loginInfer>, res: Response) => {
        const { password } = req.body;

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new ApiError(404, "user not found");
        }

        // comparing the password
        const decryptPassword = await bcrypt.compareSync(
            password,
            user.password
        );

        if (!decryptPassword) {
            throw new ApiError(401, "invalid credential");
        }

        // payload for access token
        const payload: tokenPayloadInfer = {
            _id: user._id,
            userName: user.userName,
            email: user.email,
        };

        const accessToken = generateToken(
            payload,
            process.env.ACCESS_TOKEN_SECRET as any,
            process.env.ACCESS_TOKEN_EXPERY
        );
        const refreshToken = generateToken(
            {
                _id: user._id,
            },
            process.env.REFRESH_TOKEN_SECRET as any,
            process.env.REFRESH_TOKEN_EXPERY
        );

        // rmoving the password for json response
        const { userName, _id, avater, email, fullName } = user;

        // seting the cookies and headers(optional)
        res.status(201)
            .cookie("accesstoken", accessToken)
            .cookie("refreshtoken", refreshToken)
            .setHeader("accesstoken", accessToken)
            .setHeader("refreshtoken", refreshToken)
            .json(
                new ApiResponse(
                    201,
                    { userName, _id, avater, email, fullName },
                    "login success"
                )
            );
    }
);
