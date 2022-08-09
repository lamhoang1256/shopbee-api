import { Router } from "express";
import bannerControllers from "../controllers/banner.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const bannerRoutes = Router();

bannerRoutes.get("/", bannerControllers.getAllBanner);
bannerRoutes.get("/:id", bannerControllers.getSingleBanner);
bannerRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, bannerControllers.addNewBanner);
bannerRoutes.delete("/:id", tokenMiddleware.verifyTokenAndAdmin, bannerControllers.deleteBanner);
bannerRoutes.put("/:id", tokenMiddleware.verifyTokenAndAdmin, bannerControllers.updateBanner);

export default bannerRoutes;
