import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { salt } from "../constants";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            index: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            index: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
        avater: {
            type: String, // Cloudinary url...
        },
        refreshToken: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
    next();
});
export const User = model("User", userSchema);
