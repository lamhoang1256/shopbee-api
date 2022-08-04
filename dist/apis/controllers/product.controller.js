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
const product_service_1 = __importDefault(require("../services/product.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
const addNewProduct = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield product_service_1.default.addNewProduct(req);
    (0, response_1.responseSuccess)(res, newProduct);
}));
const getAllProduct = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_service_1.default.getAllProduct(req);
    (0, response_1.responseSuccess)(res, products);
}));
const getSingleProduct = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_service_1.default.getSingleProduct(req);
    (0, response_1.responseSuccess)(res, product);
}));
const deleteProduct = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield product_service_1.default.deleteProduct(req);
    (0, response_1.responseSuccess)(res, deletedProduct);
}));
const updateProduct = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield product_service_1.default.updateProduct(req);
    (0, response_1.responseSuccess)(res, updatedProduct);
}));
const productControllers = {
    addNewProduct,
    getAllProduct,
    getSingleProduct,
    deleteProduct,
    updateProduct,
};
exports.default = productControllers;
