import { Router } from "express";
import importControllers from "../controllers/import.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const importRoutes = Router();

importRoutes.post("/category", tokenMiddleware.verifyTokenAndAdmin, importControllers.category);
importRoutes.post("/product", tokenMiddleware.verifyTokenAndAdmin, importControllers.product);

export default importRoutes;
