"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = exports.responseSuccess = void 0;
const responseSuccess = (res, data) => {
    const status = (data === null || data === void 0 ? void 0 : data.status) || 200;
    res.status(status).json(Object.assign({ status, success: true }, data));
};
exports.responseSuccess = responseSuccess;
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
