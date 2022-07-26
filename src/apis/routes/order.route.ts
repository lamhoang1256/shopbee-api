import { Router } from "express";
import orderControllers from "../controllers/order.controller";
import helpersMiddleware from "../middlewares/helpers.middleware";
import orderMiddleware from "../middlewares/order.middleware";
import tokenMiddleware from "../middlewares/token.middleware";
const orderRoutes = Router();

orderRoutes.post(
  "/",
  tokenMiddleware.verifyToken,
  orderMiddleware.createNewOrderRules(),
  helpersMiddleware.entityValidator,
  orderControllers.createNewOrder,
);
orderRoutes.get("/", tokenMiddleware.verifyTokenAndAdmin, orderControllers.getAllOrder);
orderRoutes.get("/me", tokenMiddleware.verifyToken, orderControllers.getAllOrderMe);
orderRoutes.get(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyToken,
  orderControllers.getSingleOrder,
);
orderRoutes.delete(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  orderControllers.deleteOrder,
);
orderRoutes.put(
  "/:id/processing",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  orderControllers.updateStatusOrderToProcessing,
);
orderRoutes.put(
  "/:id/shipping",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  orderControllers.updateStatusOrderToShipping,
);
orderRoutes.put(
  "/:id/delivered",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  orderControllers.updateStatusOrderToDelivered,
);
orderRoutes.put(
  "/:id/canceled",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyToken,
  orderControllers.updateStatusOrderToCancel,
);

export default orderRoutes;
