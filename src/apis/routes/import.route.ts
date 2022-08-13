import { Router } from "express";
import importControllers from "../controllers/import.controller";
const importRoutes = Router();

importRoutes.post("/category", importControllers.category);
importRoutes.post("/product", importControllers.product);

export default importRoutes;
