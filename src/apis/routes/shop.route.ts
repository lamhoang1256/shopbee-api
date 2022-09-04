import shopControllers from "../controllers/shop.controller";
import { Router } from "express";
import tokenMiddleware from "../middlewares/token.middleware";
import shopMiddleware from "../middlewares/shop.middleware";
import helpersMiddleware from "../middlewares/helpers.middleware";
const shopRoutes = Router();

shopRoutes.get("/", shopControllers.getShopInfo);
shopRoutes.get(
  "/overview",
  tokenMiddleware.verifyTokenAndAdmin,
  shopControllers.getOverviewDashboard,
);
shopRoutes.post(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  shopMiddleware.addShopInfoRules(),
  helpersMiddleware.entityValidator,
  shopControllers.addShopInfo,
);
shopRoutes.put(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  shopMiddleware.updateShopInfoRules(),
  helpersMiddleware.entityValidator,
  shopControllers.updateShopInfo,
);
shopRoutes.delete(
  "/",

  tokenMiddleware.verifyTokenAndAdmin,
  shopControllers.deleteShopInfo,
);

export default shopRoutes;
