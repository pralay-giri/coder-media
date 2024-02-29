import { Types } from "mongoose";

export interface UserInfer {
    _id: Types.ObjectId;
    fullName: string;
    username: string;
    email: string;
    password: string;
    avater: string;
}

export interface PostInfer {
    _id: Types.ObjectId;
    icon: string;
    communityName: string;
    members: UserInfer[];
    posts: PostInfer[];
}

export interface CommunityInfer {
    _id: Types.ObjectId;
    title: string;
    payload: string;
    picture: string;
    author: string;
}

export interface ApiResponseInfer {
    statusCode: number;
    data: Object;
    message: string;
    success: boolean;
}

export interface ApiErrorInfer {
    statusCode: number;
    data: null | Object;
    message: string;
    success: boolean;
    errors: Error[];
    stack?: string;
}
