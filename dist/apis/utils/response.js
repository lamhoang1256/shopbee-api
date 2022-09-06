"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = exports.responseSuccess = void 0;
const status_1 = require("../constants/status");
const responseSuccess = (res, data) => {
    const status = (data === null || data === void 0 ? void 0 : data.status) || status_1.STATUS.OK;
    res.status(status).json(Object.assign({ status, success: true }, data));
};
exports.responseSuccess = responseSuccess;
const responseError = (err, res) => {
    const status = err.status || status_1.STATUS.INTERNAL_SERVER_ERROR;
    const message = err.message || "Lỗi server!";
    const error = err.error;
    return res.status(status).json({
        status,
        success: false,
        message,
        error,
    });
};
exports.responseError = responseError;
