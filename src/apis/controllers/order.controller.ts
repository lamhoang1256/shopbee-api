import { Request, Response } from "express";
import orderServices from "../services/order.service";
import { catchAsync } from "../utils/catch-async";
import { responseSuccess } from "../utils/response";

const createNewOrder = catchAsync(async (req: Request, res: Response) => {
  const newOrder = await orderServices.createNewOrder(req);
  responseSuccess(res, newOrder);
});

const getAllOrderAdmin = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderServices.getAllOrderAdmin(req);
  responseSuccess(res, orders);
});

const getAllOrderMe = catchAsync(async (req: Request, res: Response) => {
  const orders = await orderServices.getAllOrderMe(req);
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
  getAllOrderAdmin,
  getAllOrderMe,
  getSingleOrder,
  updateStatusOrderToShipping,
  updateStatusOrderToDelivered,
};
export default categoryControllers;
