"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(status, message, error) {
        super(message);
        this.status = status;
        this.error = error;
    }
}
exports.ApiError = ApiError;
