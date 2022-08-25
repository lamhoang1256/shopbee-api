"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMongoId = exports.isAdmin = exports.isEmail = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const REGEX_EMAIL = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
const isEmail = (email) => {
    return REGEX_EMAIL.test(email);
};
exports.isEmail = isEmail;
const isAdmin = (req) => {
    var _a;
    return (_a = req.user) === null || _a === void 0 ? void 0 : _a.isAdmin;
};
exports.isAdmin = isAdmin;
const isMongoId = (id) => mongoose_1.default.Types.ObjectId.isValid(id);
exports.isMongoId = isMongoId;
