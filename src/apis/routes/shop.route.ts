import shopControllers from "../controllers/shop.controller";
import { Router } from "express";
import tokenMiddleware from "../middlewares/tokenMiddleware";
import shopMiddleware from "../middlewares/shop.middleware";
import helpersMiddleware from "../middlewares/helpersMiddleware";
const shopRoutes = Router();

shopRoutes.get("/", shopControllers.getShopInfo);
shopRoutes.post(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  shopMiddleware.addShopInfoRules(),
  helpersMiddleware.entityValidator,
  shopControllers.addShopInfo,
);
shopRoutes.put(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  shopMiddleware.updateShopInfoRules(),
  helpersMiddleware.entityValidator,
  shopControllers.updateShopInfo,
);
shopRoutes.delete(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  shopControllers.deleteShopInfo,
);

export default shopRoutes;
