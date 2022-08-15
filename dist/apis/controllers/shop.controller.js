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
const shop_service_1 = __importDefault(require("../services/shop.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
const getSingleShop = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddress = yield shop_service_1.default.getSingleShop(req);
    (0, response_1.responseSuccess)(res, shopAddress);
}));
const getAllShop = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddressList = yield shop_service_1.default.getAllShop(req);
    (0, response_1.responseSuccess)(res, shopAddressList);
}));
const addNewShop = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAddress = yield shop_service_1.default.addNewShop(req);
    (0, response_1.responseSuccess)(res, newAddress);
}));
const updateShop = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAddress = yield shop_service_1.default.updateShop(req);
    (0, response_1.responseSuccess)(res, updatedAddress);
}));
const deleteShop = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAddress = yield shop_service_1.default.deleteShop(req);
    (0, response_1.responseSuccess)(res, deletedAddress);
}));
const shopControllers = {
    getSingleShop,
    getAllShop,
    addNewShop,
    updateShop,
    deleteShop,
};
exports.default = shopControllers;
