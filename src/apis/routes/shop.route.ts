import shopControllers from "../controllers/shop.controller";
import { Router } from "express";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const shopRoutes = Router();

shopRoutes.get("/address", tokenMiddleware.verifyTokenAndAdmin, shopControllers.getAllShopAddress);
shopRoutes.get(
  "/address/:id",
  tokenMiddleware.verifyTokenAndAdmin,
  shopControllers.getSingleShopAddress,
);
shopRoutes.post(
  "/address/",
  tokenMiddleware.verifyTokenAndAdmin,
  shopControllers.addNewShopAddress,
);
shopRoutes.put(
  "/address/:id",
  tokenMiddleware.verifyTokenAndAdmin,
  shopControllers.updateShopAddress,
);
shopRoutes.put(
  "/address/:id/default",
  tokenMiddleware.verifyTokenAndAdmin,
  shopControllers.changeShopAddressDefault,
);
shopRoutes.delete(
  "/address/:id",
  tokenMiddleware.verifyTokenAndAdmin,
  shopControllers.deleteShopAddress,
);

export default shopRoutes;
