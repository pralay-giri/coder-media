import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { PostInfer } from "../@types";

interface TypedRequest<T> extends Request {
    body: T;
    file: any;
}

const savePost = asyncHandler(
    async (req: TypedRequest<PostInfer>, res: Response) => {

    }
);


export {savePost}