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
const banner_service_1 = __importDefault(require("../services/banner.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
const getAllBanner = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const banners = yield banner_service_1.default.getAllBanner();
    (0, response_1.responseSuccess)(res, banners);
}));
const getSingleBanner = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const banner = yield banner_service_1.default.getSingleBanner(req);
    (0, response_1.responseSuccess)(res, banner);
}));
const addNewBanner = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newBanner = yield banner_service_1.default.addNewBanner(req);
    (0, response_1.responseSuccess)(res, newBanner);
}));
const updateBanner = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBanner = yield banner_service_1.default.updateBanner(req);
    (0, response_1.responseSuccess)(res, updatedBanner);
}));
const deleteBanner = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedBanner = yield banner_service_1.default.deleteBanner(req);
    (0, response_1.responseSuccess)(res, deletedBanner);
}));
const bannerControllers = {
    getAllBanner,
    getSingleBanner,
    addNewBanner,
    updateBanner,
    deleteBanner,
};
exports.default = bannerControllers;
