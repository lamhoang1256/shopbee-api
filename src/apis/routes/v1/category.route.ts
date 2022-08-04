import { Router } from "express";
import categoryControllers from "../../controllers/category.controller";
const categoryRoutes = Router();

categoryRoutes.post("/", categoryControllers.addNewCategory);
categoryRoutes.get("/", categoryControllers.getAllCategory);
categoryRoutes.get("/:id", categoryControllers.getSingleCategory);
categoryRoutes.delete("/:id", categoryControllers.deleteCategory);
categoryRoutes.put("/:id", categoryControllers.updateCategory);

export default categoryRoutes;
