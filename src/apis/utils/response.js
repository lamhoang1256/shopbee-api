"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.responseError = exports.responseSuccess = void 0;
var status_1 = require("../constants/status");
var responseSuccess = function (res, data) {
    var status = (data === null || data === void 0 ? void 0 : data.status) || status_1.STATUS.OK;
    res.status(status).json(__assign({ status: status, success: true }, data));
};
exports.responseSuccess = responseSuccess;
var responseError = function (err, res) {
    var status = err.status || status_1.STATUS.INTERNAL_SERVER_ERROR;
    var message = err.message || "Lỗi server!";
    var error = err.error;
    return res.status(status).json({
        status: status,
        success: false,
        message: message,
        error: error
    });
};
exports.responseError = responseError;
