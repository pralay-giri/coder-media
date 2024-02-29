import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { salt } from "../constants";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        username: {
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
        }
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
    next();
});

userSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
            data: {
                _id: this._id,
                fullName: this.fullName,
                email: this.email,
            },
        },
        process.env?.ACCESS_TOKEN_SECRET || "acc-secret",
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPERY,
        }
    );
};

userSchema.methods.generateRefreshToken = function() {
    jwt.sign(
        {
            data: {
                _id: this._id
            }
        },
        process.env?.REFRESH_TOKEN_SECRET || "ref-secret",
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPERY
        }
    )
}

export const User = model("User", userSchema);
