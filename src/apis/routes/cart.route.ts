import { Router } from "express";
import cartControllers from "../controllers/cart.controller";
import cartMiddleware from "../middlewares/cartMiddleware";
import helpersMiddleware from "../middlewares/helpersMiddleware";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const cartRoutes = Router();

cartRoutes.get("/", tokenMiddleware.verifyToken, cartControllers.getAllCart);
cartRoutes.post(
  "/add-to-cart",
  cartMiddleware.addToCartRules(),
  helpersMiddleware.entityValidator,
  tokenMiddleware.verifyToken,
  cartControllers.addToCart,
);
cartRoutes.delete(
  "/",
  cartMiddleware.deleteSingleCartRules(),
  helpersMiddleware.entityValidator,
  tokenMiddleware.verifyToken,
  cartControllers.deleteSingleCart,
);
cartRoutes.delete("/all", tokenMiddleware.verifyToken, cartControllers.deleteCarts);

export default cartRoutes;
