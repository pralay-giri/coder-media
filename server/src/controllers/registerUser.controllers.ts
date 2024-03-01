import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { UserInfer } from "../@types";
import { ApiError } from "../utils/ApiError";
import { User } from "../models/user.models";
import { uploadOnCloudinary } from "../utils/cloudinary";
import { ApiResponse } from "../utils/ApiResponse";

interface TypedRequest<T> extends Request {
    body: T;
    files: any;
}

export const registerUser = asyncHandler(
    async (req: TypedRequest<UserInfer>, res: Response, next: NextFunction) => {
        // get user details from frontend
        const { fullName, userName, email, password } = req.body;

        // validation - not empty
        if (
            [fullName, userName, email, password].some(
                (feild) => feild?.trim() === ""
            )
        ) {
            throw new ApiError(401, "Some fields are missing.");
        }

        // check if user already exists: userName, email
        const existUser: any = await User.findOne({
            $or: [{ userName }, { email }],
        });

        if (existUser) throw new ApiError(409, "User already exist.");

        // check for images, check for avatar
        let avaterLocalPath;
        if (req.files?.avater?.[0]?.path && req.files?.avater.length > 0) {
            avaterLocalPath = req.files?.avater[0]?.path;
        }

        console.log(avaterLocalPath);
        // upload them to ☁️cloudinary, avatar
        const imgInfo = await uploadOnCloudinary(avaterLocalPath);
        if (!imgInfo) {
            throw new ApiError(500, "Error while uploading image");
        }

        // create user object - create entry in db
        const user = await User.create({
            fullName,
            userName,
            email,
            password,
            avater: imgInfo?.secure_url || "",
        });

        // remove password and refresh token field from response
        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        );

        // check for user creation
        if (!createdUser) {
            throw new ApiError(500, "Failed, while creating user in DB.");
        }

        // return res
        return res
            .status(201)
            .json(
                new ApiResponse(
                    200,
                    createdUser,
                    "User registered successfully..."
                )
            );
    }
);

// Login controller
