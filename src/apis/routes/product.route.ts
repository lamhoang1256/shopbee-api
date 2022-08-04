import { Router } from "express";
import productControllers from "../controllers/product.controller";
const productRoutes = Router();

productRoutes.post("/", productControllers.addNewProduct);
productRoutes.get("/", productControllers.getAllProduct);
productRoutes.get("/:id", productControllers.getSingleProduct);
productRoutes.delete("/:id", productControllers.deleteProduct);
productRoutes.put("/:id", productControllers.updateProduct);

export default productRoutes;
