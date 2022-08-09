import { Router } from "express";
import orderControllers from "../controllers/order.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const orderRoutes = Router();

orderRoutes.post("/", orderControllers.createNewOrder);
orderRoutes.get("/user", orderControllers.getAllOrderByUser);
orderRoutes.get("/admin", tokenMiddleware.verifyTokenAndAdmin, orderControllers.getAllOrderByAdmin);
orderRoutes.get("/", orderControllers.getSingleOrder);
orderRoutes.put(
  "/:id/shipping",
  tokenMiddleware.verifyTokenAndAdmin,
  orderControllers.updateStatusOrderToShipping,
);
orderRoutes.put(
  "/:id/delivered",
  tokenMiddleware.verifyTokenAndAdmin,
  orderControllers.updateStatusOrderToDelivered,
);

export default orderRoutes;
