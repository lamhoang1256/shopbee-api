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
const banner_model_1 = __importDefault(require("../models/banner.model"));
const api_error_1 = require("../utils/api-error");
const getAllBanner = () => __awaiter(void 0, void 0, void 0, function* () {
    const banners = yield banner_model_1.default.find().sort({
        createdAt: -1,
    });
    const response = {
        message: "Lấy tất cả banner thành công!",
        data: banners,
    };
    return response;
});
const getSingleBanner = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const banner = yield banner_model_1.default.findById(req.params.id);
    const response = {
        message: "Lấy banner thành công!",
        data: banner,
    };
    return response;
});
const addNewBanner = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const countBanners = yield banner_model_1.default.find().countDocuments();
    if (countBanners >= 6)
        throw new api_error_1.ApiError(500, "Số lượng banner tối đa là 6!");
    const newBanner = new banner_model_1.default(req.body);
    const savedBanner = yield newBanner.save();
    const response = {
        message: "Thêm mới banner thành công!",
        data: savedBanner,
    };
    return response;
});
const deleteBanner = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const bannerInDB = yield banner_model_1.default.findByIdAndDelete(req.params.id).lean();
    if (!bannerInDB)
        throw new api_error_1.ApiError(400, "Không tìm thấy banner!");
    const response = {
        message: "Xóa banner thành công!",
    };
    return response;
});
const updateBanner = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const banner = banner_model_1.default.findById(req.params.id);
    if (!banner)
        throw new api_error_1.ApiError(404, "Không tìm thấy banner!");
    yield banner.updateOne({ $set: req.body });
    const response = {
        message: "Cập nhật banner thành công!",
    };
    return response;
});
const bannnerServices = {
    getAllBanner,
    getSingleBanner,
    addNewBanner,
    updateBanner,
    deleteBanner,
};
exports.default = bannnerServices;
