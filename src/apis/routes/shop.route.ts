import shopControllers from "../controllers/shop.controller";
import { Router } from "express";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const shopRoutes = Router();

shopRoutes.get("/", tokenMiddleware.verifyTokenAndAdmin, shopControllers.getAllShop);
shopRoutes.get("/:id", tokenMiddleware.verifyTokenAndAdmin, shopControllers.getSingleShop);
shopRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, shopControllers.addNewShop);
shopRoutes.put("/:id", tokenMiddleware.verifyTokenAndAdmin, shopControllers.updateShop);
shopRoutes.delete("/:id", tokenMiddleware.verifyTokenAndAdmin, shopControllers.deleteShop);

export default shopRoutes;
