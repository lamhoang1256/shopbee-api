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
const order_service_1 = __importDefault(require("../services/order.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
const createNewOrder = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = yield order_service_1.default.createNewOrder(req);
    (0, response_1.responseSuccess)(res, newOrder);
}));
const getAllOrderAdmin = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_service_1.default.getAllOrderAdmin(req);
    (0, response_1.responseSuccess)(res, orders);
}));
const getAllOrderMe = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_service_1.default.getAllOrderMe(req);
    (0, response_1.responseSuccess)(res, orders);
}));
const getSingleOrder = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_service_1.default.getSingleOrder(req);
    (0, response_1.responseSuccess)(res, order);
}));
const updateStatusOrderToShipping = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedOrder = yield order_service_1.default.updateStatusOrderToShipping(req);
    (0, response_1.responseSuccess)(res, updatedOrder);
}));
const updateStatusOrderToDelivered = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedOrder = yield order_service_1.default.updateStatusOrderToDelivered(req);
    (0, response_1.responseSuccess)(res, updatedOrder);
}));
const updateStatusOrderToCancel = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedOrder = yield order_service_1.default.updateStatusOrderToCancel(req);
    (0, response_1.responseSuccess)(res, updatedOrder);
}));
const categoryControllers = {
    createNewOrder,
    getAllOrderAdmin,
    getAllOrderMe,
    getSingleOrder,
    updateStatusOrderToShipping,
    updateStatusOrderToDelivered,
    updateStatusOrderToCancel,
};
exports.default = categoryControllers;
