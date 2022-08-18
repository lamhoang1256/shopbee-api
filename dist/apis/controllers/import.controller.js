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
const category_model_1 = __importDefault(require("../models/category.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
const category_seed_1 = __importDefault(require("../seeders/category.seed"));
const product_seed_1 = __importDefault(require("../seeders/product.seed"));
// @desc    Xóa tất cả dữ liệu trong collection Category hiện tại trong MongoDB và thêm mới 10 category từ file seed
// @route   POST /api/import/category
// @access  Private/Admin
const category = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield category_model_1.default.remove({});
    const categories = yield category_model_1.default.insertMany(category_seed_1.default);
    (0, response_1.responseSuccess)(res, categories);
}));
// @desc    Xóa tất cả dữ liệu trong collection Product hiện tại trong MongoDB và thêm mới 100 product từ file seed
// @route   POST /api/import/product
// @access  Private/Admin
const product = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.default.remove({});
    const products = yield product_model_1.default.insertMany(product_seed_1.default);
    (0, response_1.responseSuccess)(res, products);
}));
const importControllers = {
    category,
    product,
};
exports.default = importControllers;
