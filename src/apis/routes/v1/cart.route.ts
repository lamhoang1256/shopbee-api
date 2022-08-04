import { Router } from "express";
import cartControllers from "../../controllers/cart.controller";
const cartRoutes = Router();

cartRoutes.post("/add-to-cart", cartControllers.addToCart);
cartRoutes.get("/", cartControllers.getAllCart);
cartRoutes.delete("/", cartControllers.deleteSingleCart);
cartRoutes.delete("/all", cartControllers.deleteCarts);

export default cartRoutes;
