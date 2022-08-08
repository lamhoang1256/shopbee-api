"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
const userGetSingle = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.default.userGetSingle(req);
    (0, response_1.responseSuccess)(res, users);
}));
const userGetAll = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.default.userGetAll(req);
    (0, response_1.responseSuccess)(res, users);
}));
const userUpdateProfile = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_service_1.default.userUpdateProfile(req);
    (0, response_1.responseSuccess)(res, updatedUser);
}));
const userChangePassword = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_service_1.default.userChangePassword(req);
    (0, response_1.responseSuccess)(res, updatedUser);
}));
const userAddNew = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_service_1.default.userAddNew(req);
    (0, response_1.responseSuccess)(res, updatedUser);
}));
const deleteUser = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_service_1.default.deleteUser(req);
    (0, response_1.responseSuccess)(res, deletedUser);
}));
const userControllers = {
    userGetAll,
    userAddNew,
    deleteUser,
    userUpdateProfile,
    userChangePassword,
    userGetSingle,
};
exports.default = userControllers;
