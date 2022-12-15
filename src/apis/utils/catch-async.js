"use strict";
exports.__esModule = true;
exports.catchAsync = void 0;
var catchAsync = function (callback) { return function (req, res, next) {
    Promise.resolve(callback(req, res, next))["catch"](function (err) { return next(err); });
}; };
exports.catchAsync = catchAsync;
