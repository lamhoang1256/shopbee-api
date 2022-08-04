import { Request, Response } from "express";
import orderServices from "../services/order.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const createNewOrder = catchAsync(async (req: Request, res: Response) => {
  const newOrder = await orderServices.createNewOrder(req);
  responseSuccess(res, newOrder);
});

const getAllOrderByAdmin = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderServices.getAllOrderByAdmin();
  responseSuccess(res, orders);
});

const getAllOrderByUser = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderServices.getAllOrderByUser(req);
  responseSuccess(res, orders);
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const order = await orderServices.getSingleOrder(req);
  responseSuccess(res, order);
});

const updateStatusOrderToShipping = catchAsync(async (req: Request, res: Response) => {
  const updatedOrder = await orderServices.updateStatusOrderToShipping(req);
  responseSuccess(res, updatedOrder);
});

const updateStatusOrderToDelivered = catchAsync(async (req: Request, res: Response) => {
  const updatedOrder = await orderServices.updateStatusOrderToDelivered(req);
  responseSuccess(res, updatedOrder);
});

const categoryControllers = {
  createNewOrder,
  getAllOrderByAdmin,
  getAllOrderByUser,
  getSingleOrder,
  updateStatusOrderToShipping,
  updateStatusOrderToDelivered,
};
export default categoryControllers;
