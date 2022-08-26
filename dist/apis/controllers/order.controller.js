"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const order_service_1 = __importDefault(require("../services/order.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
// @desc    Tạo mới 1 hàng
// @route   POST /api/order
// @access  Private
const createNewOrder = (0, catch_async_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = yield order_service_1.default.createNewOrder(req);
    (0, response_1.responseSuccess)(res, newOrder);
  }),
);
// @desc    Lấy tất cả đơn hàng bời Admin
// @route   GET /api/order/admin
// @access  Private/Admin
const getAllOrder = (0, catch_async_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_service_1.default.getAllOrder(req);
    (0, response_1.responseSuccess)(res, orders);
  }),
);
// @desc    Lấy tất cả đơn hàng bời người dùng
// @route   GET /api/order/me
// @access  Private
const getAllOrderMe = (0, catch_async_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_service_1.default.getAllOrderMe(req);
    (0, response_1.responseSuccess)(res, orders);
  }),
);
// @desc    Lấy chi tiết 1 đơn hàng
// @route   GET /api/order/:id
// @access  Private
const getSingleOrder = (0, catch_async_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_service_1.default.getSingleOrder(req);
    (0, response_1.responseSuccess)(res, order);
  }),
);
// @desc    Chỉnh sửa trạng thái đơn hàng sang đang giao hàng
// @route   PUT /api/order/:id/shipping
// @access  Private/Admin
const updateStatusOrderToShipping = (0, catch_async_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const updatedOrder = yield order_service_1.default.updateStatusOrderToShipping(req);
    (0, response_1.responseSuccess)(res, updatedOrder);
  }),
);
// @desc    Chỉnh sửa trạng thái đơn hàng sang đã giao hàng
// @route   PUT /api/order/:id/delivered
// @access  Private/Admin
const updateStatusOrderToDelivered = (0, catch_async_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const updatedOrder = yield order_service_1.default.updateStatusOrderToDelivered(req);
    (0, response_1.responseSuccess)(res, updatedOrder);
  }),
);
// @desc    Chỉnh sửa trạng thái đơn hàng sang đã hủy
// @route   PUT /api/order/:id/canceled
// @access  Private/Admin
const updateStatusOrderToCancel = (0, catch_async_1.catchAsync)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const updatedOrder = yield order_service_1.default.updateStatusOrderToCancel(req);
    (0, response_1.responseSuccess)(res, updatedOrder);
  }),
);
const categoryControllers = {
  createNewOrder,
  getAllOrder,
  getAllOrderMe,
  getSingleOrder,
  updateStatusOrderToShipping,
  updateStatusOrderToDelivered,
  updateStatusOrderToCancel,
};
exports.default = categoryControllers;
