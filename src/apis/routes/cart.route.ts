import { Router } from "express";
import cartControllers from "../controllers/cart.controller";
import cartMiddleware from "../middlewares/cart.middleware";
import helpersMiddleware from "../middlewares/helpers.middleware";
import tokenMiddleware from "../middlewares/token.middleware";
const cartRoutes = Router();

cartRoutes.get("/", tokenMiddleware.verifyToken, cartControllers.getAllCart);
cartRoutes.post(
  "/add-to-cart",
  tokenMiddleware.verifyToken,
  cartMiddleware.addToCartRules(),
  helpersMiddleware.entityValidator,
  cartControllers.addToCart,
);
cartRoutes.delete("/", tokenMiddleware.verifyToken, cartControllers.deleteCarts);
cartRoutes.delete(
  "/:id",
  tokenMiddleware.verifyToken,
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  cartControllers.deleteSingleCart,
);

export default cartRoutes;
