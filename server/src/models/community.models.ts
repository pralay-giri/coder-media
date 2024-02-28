import { Schema, model } from "mongoose";

const communitySchema = new Schema({});

export const Community = model("Community", communitySchema);
