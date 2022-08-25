import { Router } from "express";
import bannerControllers from "../controllers/banner.controller";
import bannerMiddleware from "../middlewares/bannerMiddleware";
import helpersMiddleware from "../middlewares/helpersMiddleware";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const bannerRoutes = Router();

bannerRoutes.get("/", bannerControllers.getAllBanner);
bannerRoutes.get(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  bannerControllers.getSingleBanner,
);
bannerRoutes.post(
  "/",
  bannerMiddleware.addNewBannerRules(),
  helpersMiddleware.entityValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  bannerControllers.addNewBanner,
);
bannerRoutes.delete(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  bannerControllers.deleteBanner,
);
bannerRoutes.put(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  bannerMiddleware.updateBannerRules,
  tokenMiddleware.verifyTokenAndAdmin,
  bannerControllers.updateBanner,
);

export default bannerRoutes;
