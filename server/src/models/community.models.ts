import { Schema, model } from "mongoose";

const communitySchema = new Schema(
    {
        communityName: {
            type: String,
            required: true,
            trim: true,
        },
        icon: {
            type: String,
            trim: true,
        },
        posts: {
            type: [Schema.Types.ObjectId],
            ref: "Post",
        },
        members: {
            type: [Schema.Types.ObjectId],
            ref: "User",
        },
    },
    { timestamps: true, versionKey: false }
);

export const Community = model("Community", communitySchema);
