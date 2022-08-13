import { Router } from "express";
import orderControllers from "../controllers/order.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const orderRoutes = Router();

orderRoutes.post("/", tokenMiddleware.verifyToken, orderControllers.createNewOrder);
orderRoutes.get("/me", tokenMiddleware.verifyToken, orderControllers.getAllOrderMe);
orderRoutes.get("/admin", tokenMiddleware.verifyTokenAndAdmin, orderControllers.getAllOrderAdmin);
orderRoutes.get("/:id", orderControllers.getSingleOrder);
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
orderRoutes.put(
  "/:id/canceled",
  tokenMiddleware.verifyToken,
  orderControllers.updateStatusOrderToCancel,
);

export default orderRoutes;
