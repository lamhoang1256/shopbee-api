import shopControllers from "../controllers/shop.controller";
import { Router } from "express";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const shopRoutes = Router();

shopRoutes.get("/", shopControllers.getShopInfo);
shopRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, shopControllers.addNewShopInfo);
shopRoutes.put("/:id", tokenMiddleware.verifyTokenAndAdmin, shopControllers.updateShopInfo);
shopRoutes.delete("/:id", tokenMiddleware.verifyTokenAndAdmin, shopControllers.deleteShopInfo);

export default shopRoutes;
