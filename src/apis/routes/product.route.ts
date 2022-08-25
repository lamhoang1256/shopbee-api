import { Router } from "express";
import productControllers from "../controllers/product.controller";
import helpersMiddleware from "../middlewares/helpersMiddleware";
import productMiddleware from "../middlewares/productMiddleware";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const productRoutes = Router();

productRoutes.get(
  "/",
  productMiddleware.getProductsRules(),
  helpersMiddleware.entityValidator,
  productControllers.getAllProduct,
);
productRoutes.get(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  productControllers.getSingleProduct,
);
productRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, productControllers.addNewProduct);
productRoutes.delete("/:id", tokenMiddleware.verifyTokenAndAdmin, productControllers.deleteProduct);
productRoutes.put("/:id", tokenMiddleware.verifyTokenAndAdmin, productControllers.updateProduct);
productRoutes.post("/:id/review", tokenMiddleware.verifyToken, productControllers.addNewReview);
productRoutes.delete("/:id/review", tokenMiddleware.verifyToken, productControllers.deleteReview);
productRoutes.put("/:id/review", tokenMiddleware.verifyToken, productControllers.updateReview);

export default productRoutes;
