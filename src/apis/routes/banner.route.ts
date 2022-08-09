import { Router } from "express";
import bannerControllers from "../controllers/banner.controller";
const bannerRoutes = Router();

bannerRoutes.get("/", bannerControllers.getAllBanner);
bannerRoutes.get("/:id", bannerControllers.getSingleBanner);
bannerRoutes.post("/", bannerControllers.addNewBanner);
bannerRoutes.delete("/:id", bannerControllers.deleteBanner);
bannerRoutes.put("/:id", bannerControllers.updateBanner);

export default bannerRoutes;
