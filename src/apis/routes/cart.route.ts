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
cartRoutes.delete(
  "/",
  tokenMiddleware.verifyToken,
  cartMiddleware.deleteSingleCartRules(),
  helpersMiddleware.entityValidator,
  cartControllers.deleteSingleCart,
);
cartRoutes.delete("/all", tokenMiddleware.verifyToken, cartControllers.deleteCarts);

export default cartRoutes;
