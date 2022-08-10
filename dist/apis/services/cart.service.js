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
const cart_model_1 = __importDefault(require("../models/cart.model"));
const product_model_1 = __importDefault(require("../models/product.model"));
const api_error_1 = require("../utils/api-error");
const addNewProductToCart = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId, quantity } = payload;
    const newCart = {
        user: userId,
        product: {
            _id: productId,
        },
        quantity,
    };
    const savedCart = yield new cart_model_1.default(newCart).save();
    return savedCart;
});
const updateQuantityProductInCart = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productId, quantity } = payload;
    const updatedCart = yield cart_model_1.default.findOneAndUpdate({
        user: userId,
        product: {
            _id: productId,
        },
    }, {
        quantity,
    });
    return updatedCart;
});
const addToCart = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user._id;
    const { productId, quantity } = req.body;
    const product = yield product_model_1.default.findById(productId);
    if (!product)
        throw new api_error_1.ApiError(404, "Không tìm thấy sản phẩm!");
    if (quantity > product.quantity)
        throw new api_error_1.ApiError(406, `Số lượng sản phẩm tối đa là ${product.quantity}!`);
    let savedCart;
    const cartInDb = yield cart_model_1.default.findOne({
        user: userId,
        product: {
            _id: productId,
        },
    });
    const payload = { userId, productId, quantity };
    if (cartInDb) {
        savedCart = yield updateQuantityProductInCart(payload);
    }
    else {
        savedCart = yield addNewProductToCart(payload);
    }
    savedCart ? (savedCart.product = product) : savedCart;
    const response = {
        message: "Thêm sản phẩm vào giỏ hàng thành công",
        data: savedCart,
    };
    return response;
});
const getAllCart = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const carts = yield cart_model_1.default.find({ user: req.user._id })
        .populate({
        path: "product",
        populate: {
            path: "category",
        },
    })
        .sort({
        createdAt: -1,
    });
    const response = {
        message: "Lấy đơn mua thành công",
        data: carts,
    };
    return response;
});
const deleteSingleCart = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedData = yield cart_model_1.default.deleteMany({
        user: req.user._id,
        _id: { $in: req.body.cartIds },
    });
    if (!deletedData)
        throw new api_error_1.ApiError(404, "Sản phẩm bạn muốn xóa không tồn tại!");
    const response = {
        message: `Xoá ${deletedData.deletedCount} sản phẩm thành công!`,
        data: { deleted_count: deletedData.deletedCount },
    };
    return response;
});
const deleteCarts = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedData = yield cart_model_1.default.deleteMany({
        user: req.user._id,
    });
    if (!deletedData)
        throw new api_error_1.ApiError(404, "Tất cả sản phẩm bạn muốn xóa không tồn tại!");
    const response = {
        message: `Xoá ${deletedData.deletedCount} đơn thành công!`,
        data: { deleted_count: deletedData.deletedCount },
    };
    return response;
});
const cartServices = {
    getAllCart,
    addToCart,
    deleteCarts,
    deleteSingleCart,
};
exports.default = cartServices;
