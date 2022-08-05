import express, { NextFunction, Request, Response } from "express";
import authRoutes from "./v1/auth.route";
import bannerRoutes from "./v1/banner.route";
import categoryRoutes from "./v1/category.route";
import productRoutes from "./v1/product.route";
import cartRoutes from "./v1/cart.route";
import orderRoutes from "./v1/order.route";
import userRoutes from "./v1/user.route";
import cors from "cors";
import { responseError } from "../utils/response";

const appRoutes = express();
appRoutes.use(cors());
appRoutes.get("/", (req, res) => {
  res.status(200).json("This is ecommerce api");
});
appRoutes.use("/api/auth", authRoutes);
appRoutes.use("/api/category", categoryRoutes);
appRoutes.use("/api/product", productRoutes);
appRoutes.use("/api/banner", bannerRoutes);
appRoutes.use("/api/cart", cartRoutes);
appRoutes.use("/api/order", orderRoutes);
appRoutes.use("/api/user", userRoutes);
appRoutes.use((err: any, req: Request, res: Response, next: NextFunction) => {
  responseError(err, res);
});

export default appRoutes;
