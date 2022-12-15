"use strict";
exports.__esModule = true;
exports.isMongoId = exports.isAdmin = exports.isEmail = void 0;
var mongoose_1 = require("mongoose");
var REGEX_EMAIL = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
var isEmail = function (email) {
    return REGEX_EMAIL.test(email);
};
exports.isEmail = isEmail;
var isAdmin = function (req) {
    var _a;
    return (_a = req.user) === null || _a === void 0 ? void 0 : _a.isAdmin;
};
exports.isAdmin = isAdmin;
var isMongoId = function (id) { return mongoose_1["default"].Types.ObjectId.isValid(id); };
exports.isMongoId = isMongoId;
