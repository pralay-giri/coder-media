import { ApiErrorInfer } from "../@types";

class ApiError extends Error implements ApiErrorInfer{
    statusCode!: number;
    message: string;
    errors!: Error[];
    stack?: string;
    data: null | Object;
    success: boolean;

    constructor(
        statusCode: number,
        message = "Opps! something went wrong...",
        errors: Array<Error> = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.stack = stack;
        this.data = null;
        this.success = false;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
