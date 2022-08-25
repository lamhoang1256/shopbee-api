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
productRoutes.post(
  "/",
  productMiddleware.addProductRules(),
  helpersMiddleware.entityValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  productControllers.addNewProduct,
);
productRoutes.delete(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  productControllers.deleteProduct,
);
productRoutes.put(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  productMiddleware.updateProductRules(),
  helpersMiddleware.entityValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  productControllers.updateProduct,
);
productRoutes.post(
  "/:id/review",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  productMiddleware.addNewReviewRules(),
  helpersMiddleware.entityValidator,
  tokenMiddleware.verifyToken,
  productControllers.addNewReview,
);
productRoutes.delete(
  "/:id/review",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyToken,
  productControllers.deleteReview,
);
productRoutes.put(
  "/:id/review",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  productMiddleware.updateReviewRules(),
  helpersMiddleware.entityValidator,
  tokenMiddleware.verifyToken,
  productControllers.updateReview,
);

export default productRoutes;
