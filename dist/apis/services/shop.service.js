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
const shop_model_1 = __importDefault(require("../models/shop.model"));
const api_error_1 = require("../utils/api-error");
const addNewShop = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const countShops = yield shop_model_1.default.find().countDocuments();
    if (countShops >= 1)
        throw new api_error_1.ApiError(500, "Địa chỉ shop đã tồn tại!");
    const newAddress = new shop_model_1.default(req.body);
    const savedAddress = yield newAddress.save();
    const response = {
        message: "Thêm mới địa chỉ thành công!",
        data: savedAddress,
    };
    return response;
});
const getSingleShop = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddress = yield shop_model_1.default.findById(req.params.id).lean();
    if (!shopAddress)
        throw new api_error_1.ApiError(404, "Không tìm thấy địa chỉ shop!");
    const response = {
        message: "Lấy địa chỉ shop thành công!",
        data: shopAddress,
    };
    return response;
});
const getAllShop = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddress = yield shop_model_1.default.find({});
    if (!shopAddress)
        throw new api_error_1.ApiError(404, "Không tìm thấy địa chỉ shop!");
    const response = {
        message: "Lấy tất cả địa chỉ shop thành công!",
        data: shopAddress,
    };
    return response;
});
const updateShop = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAddress = yield shop_model_1.default.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedAddress)
        throw new api_error_1.ApiError(404, "Không tìm thấy địa chỉ shop!");
    const response = {
        message: "Cập nhật địa chỉ shop thành công!",
        data: updatedAddress,
    };
    return response;
});
const deleteShop = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const addressInDB = yield shop_model_1.default.findByIdAndDelete(req.params.id).lean();
    if (!addressInDB)
        throw new api_error_1.ApiError(400, "Không tìm thấy địa chỉ shop!");
    const response = {
        message: "Xóa địa chỉ shop thành công!",
    };
    return response;
});
const shopServices = {
    addNewShop,
    getSingleShop,
    getAllShop,
    updateShop,
    deleteShop,
};
exports.default = shopServices;
