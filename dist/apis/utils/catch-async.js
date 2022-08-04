"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = void 0;
const catchAsync = (callback) => (req, res, next) => {
    Promise.resolve(callback(req, res, next)).catch((err) => next(err));
};
exports.catchAsync = catchAsync;
