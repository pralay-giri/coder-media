import { ApiResponseInfer } from "../@types";

class ApiResponse implements ApiResponseInfer {
    statusCode: number;
    data: Object;
    message: string;
    success: boolean;

    constructor(statusCode: number, data: Object, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export { ApiResponse };
