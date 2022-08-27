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
const addShopInfo = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const countShops = yield shop_model_1.default.find().countDocuments();
    if (countShops >= 1)
        throw new api_error_1.ApiError(500, "Địa chỉ shop đã tồn tại!");
    const newShop = new shop_model_1.default(req.body);
    const savedShop = yield newShop.save();
    const response = {
        message: "Thêm mới thành công!",
        data: savedShop,
    };
    return response;
});
const getShopInfo = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const shop = yield shop_model_1.default.findOne({});
    if (!shop)
        throw new api_error_1.ApiError(404, "Không tìm thấy shop!");
    const response = {
        message: "Lấy tất cả shop thành công!",
        data: shop,
    };
    return response;
});
const updateShopInfo = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const shopInDB = yield shop_model_1.default.findOne({});
    if (!shopInDB)
        throw new api_error_1.ApiError(404, "Không tìm thấy shop!");
    const updatedShop = yield shopInDB.updateOne({ $set: req.body }, { new: true });
    const response = {
        message: "Chỉnh sửa shop thành công!",
        data: updatedShop,
    };
    return response;
});
const deleteShopInfo = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const shopInDB = yield shop_model_1.default.findOne({}).lean();
    if (!shopInDB)
        throw new api_error_1.ApiError(400, "Không tìm thấy shop!");
    yield shop_model_1.default.findByIdAndDelete(shopInDB._id.toString());
    const response = {
        message: "Xóa shop thành công!",
    };
    return response;
});
const shopServices = {
    addShopInfo,
    getShopInfo,
    updateShopInfo,
    deleteShopInfo,
};
exports.default = shopServices;
