import { Router } from "express";
import productControllers from "../controllers/product.controller";
import helpersMiddleware from "../middlewares/helpers.middleware";
import productMiddleware from "../middlewares/product.middleware";
import tokenMiddleware from "../middlewares/token.middleware";
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
  tokenMiddleware.verifyTokenAndAdmin,
  productMiddleware.addProductRules(),
  helpersMiddleware.entityValidator,
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
  tokenMiddleware.verifyTokenAndAdmin,
  productMiddleware.updateProductRules(),
  helpersMiddleware.entityValidator,
  productControllers.updateProduct,
);

export default productRoutes;
