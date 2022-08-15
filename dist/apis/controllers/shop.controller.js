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
const getSingleShopAddress = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddress = yield shop_service_1.default.getSingleShopAddress(req);
    (0, response_1.responseSuccess)(res, shopAddress);
}));
const getAllShopAddress = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddressList = yield shop_service_1.default.getAllShopAddress(req);
    (0, response_1.responseSuccess)(res, shopAddressList);
}));
const addNewShopAddress = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAddress = yield shop_service_1.default.addNewShopAddress(req);
    (0, response_1.responseSuccess)(res, newAddress);
}));
const updateShopAddress = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAddress = yield shop_service_1.default.updateShopAddress(req);
    (0, response_1.responseSuccess)(res, updatedAddress);
}));
const changeShopAddressDefault = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAddress = yield shop_service_1.default.changeShopAddressDefault(req);
    (0, response_1.responseSuccess)(res, updatedAddress);
}));
const deleteShopAddress = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAddress = yield shop_service_1.default.deleteShopAddress(req);
    (0, response_1.responseSuccess)(res, deletedAddress);
}));
const shopControllers = {
    getSingleShopAddress,
    getAllShopAddress,
    addNewShopAddress,
    updateShopAddress,
    deleteShopAddress,
    changeShopAddressDefault,
};
exports.default = shopControllers;
