import { Router } from "express";
import orderControllers from "../../controllers/order.controller";
const orderRoutes = Router();

orderRoutes.post("/", orderControllers.createNewOrder);
orderRoutes.get("/user", orderControllers.getAllOrderByUser);
orderRoutes.get("/admin", orderControllers.getAllOrderByAdmin);
orderRoutes.get("/", orderControllers.getSingleOrder);
orderRoutes.put("/:id/shipping", orderControllers.updateStatusOrderToShipping);
orderRoutes.put("/:id/delivered", orderControllers.updateStatusOrderToDelivered);

export default orderRoutes;
