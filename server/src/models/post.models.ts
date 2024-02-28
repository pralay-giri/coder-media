import { Schema, model } from "mongoose";

const postSchema = new Schema({});

export const Post = model("Post", postSchema);
