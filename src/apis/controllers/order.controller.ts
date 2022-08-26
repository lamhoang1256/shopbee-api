import { Request, Response } from "express";
import orderServices from "../services/order.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

// @desc    Tạo mới 1 hàng
// @route   POST /api/order
// @access  Private
const createNewOrder = catchAsync(async (req: Request, res: Response) => {
  const newOrder = await orderServices.createNewOrder(req);
  responseSuccess(res, newOrder);
});

// @desc    Lấy tất cả đơn hàng bời Admin
// @route   GET /api/order/admin
// @access  Private/Admin
const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderServices.getAllOrder(req);
  responseSuccess(res, orders);
});

// @desc    Lấy tất cả đơn hàng bời người dùng
// @route   GET /api/order/me
// @access  Private
const getAllOrderMe = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderServices.getAllOrderMe(req);
  responseSuccess(res, orders);
});

// @desc    Lấy chi tiết 1 đơn hàng
// @route   GET /api/order/:id
// @access  Private
const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const order = await orderServices.getSingleOrder(req);
  responseSuccess(res, order);
});

// @desc    Chỉnh sửa trạng thái đơn hàng sang đang giao hàng
// @route   PUT /api/order/:id/shipping
// @access  Private/Admin
const updateStatusOrderToShipping = catchAsync(async (req: Request, res: Response) => {
  const updatedOrder = await orderServices.updateStatusOrderToShipping(req);
  responseSuccess(res, updatedOrder);
});

// @desc    Chỉnh sửa trạng thái đơn hàng sang đã giao hàng
// @route   PUT /api/order/:id/delivered
// @access  Private/Admin
const updateStatusOrderToDelivered = catchAsync(async (req: Request, res: Response) => {
  const updatedOrder = await orderServices.updateStatusOrderToDelivered(req);
  responseSuccess(res, updatedOrder);
});

// @desc    Chỉnh sửa trạng thái đơn hàng sang đã hủy
// @route   PUT /api/order/:id/canceled
// @access  Private/Admin
const updateStatusOrderToCancel = catchAsync(async (req: Request, res: Response) => {
  const updatedOrder = await orderServices.updateStatusOrderToCancel(req);
  responseSuccess(res, updatedOrder);
});

const categoryControllers = {
  createNewOrder,
  getAllOrder,
  getAllOrderMe,
  getSingleOrder,
  updateStatusOrderToShipping,
  updateStatusOrderToDelivered,
  updateStatusOrderToCancel,
};
export default categoryControllers;
