import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/ApiResponse";

const testApi = (req: Request, res: Response, next: NextFunction) => {
    console.log(`A request has come from ${req.hostname}`);

    res.status(201).json(
        new ApiResponse(
            200,
            { user: { name: "John Doe", age: 19, gender: "Male" } },
            "Api response successful!!!"
        )
    );
    next();
};

export { testApi };
