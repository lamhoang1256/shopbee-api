import { Router } from "express";
import categoryControllers from "../controllers/category.controller";
import categoryMiddleware from "../middlewares/categoryMiddleware";
import helpersMiddleware from "../middlewares/helpersMiddleware";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const categoryRoutes = Router();

categoryRoutes.get("/", categoryControllers.getAllCategory);
categoryRoutes.get(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  categoryControllers.getSingleCategory,
);
categoryRoutes.post(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  categoryMiddleware.addNewCategoryRules(),
  helpersMiddleware.entityValidator,
  categoryControllers.addNewCategory,
);
categoryRoutes.delete(
  "/:id",
  tokenMiddleware.verifyTokenAndAdmin,
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  categoryControllers.deleteCategory,
);
categoryRoutes.put(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  categoryMiddleware.updateCategoryRules(),
  helpersMiddleware.entityValidator,
  categoryControllers.updateCategory,
);

export default categoryRoutes;
