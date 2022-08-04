"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = void 0;
const responseError = (err, res) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    const error = err.error;
    return res.status(status).json({
        status,
        success: false,
        message,
        error,
    });
};
exports.responseError = responseError;
