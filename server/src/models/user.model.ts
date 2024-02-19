import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        index: true,
        unique: true,
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
    confirmPassword: {
        type: String,
        required: true,
    },
    avater: {
        type: String, // Cloudinary url...
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    memberOf: [
        {
            type: Schema.Types.ObjectId,
            ref: "Community",
        },
    ],
});

export const User = model("User", userSchema);
