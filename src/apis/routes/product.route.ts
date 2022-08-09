import { Router } from "express";
import productControllers from "../controllers/product.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const productRoutes = Router();

productRoutes.get("/", productControllers.getAllProduct);
productRoutes.get("/:id", productControllers.getSingleProduct);
productRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, productControllers.addNewProduct);
productRoutes.delete("/:id", tokenMiddleware.verifyTokenAndAdmin, productControllers.deleteProduct);
productRoutes.put("/:id", tokenMiddleware.verifyTokenAndAdmin, productControllers.updateProduct);

export default productRoutes;
