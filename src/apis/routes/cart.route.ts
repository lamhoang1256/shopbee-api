import { Router } from "express";
import cartControllers from "../controllers/cart.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const cartRoutes = Router();

cartRoutes.get("/", tokenMiddleware.verifyToken, cartControllers.getAllCart);
cartRoutes.post("/add-to-cart", tokenMiddleware.verifyToken, cartControllers.addToCart);
cartRoutes.delete("/", tokenMiddleware.verifyToken, cartControllers.deleteSingleCart);
cartRoutes.delete("/all", tokenMiddleware.verifyToken, cartControllers.deleteCarts);

export default cartRoutes;
