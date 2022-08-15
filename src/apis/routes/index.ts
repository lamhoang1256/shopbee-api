import express, { NextFunction, Request, Response } from "express";
import authRoutes from "./auth.route";
import bannerRoutes from "./banner.route";
import categoryRoutes from "./category.route";
import productRoutes from "./product.route";
import cartRoutes from "./cart.route";
import orderRoutes from "./order.route";
import userRoutes from "./user.route";
import shopRoutes from "./shop.route";
import voucherRoutes from "./voucher.route";
import importRoutes from "./import.route";
import { responseError } from "../utils/response";

const appRoutes = express();
appRoutes.use("/api/import", importRoutes);
appRoutes.use("/api/auth", authRoutes);
appRoutes.use("/api/category", categoryRoutes);
appRoutes.use("/api/product", productRoutes);
appRoutes.use("/api/banner", bannerRoutes);
appRoutes.use("/api/cart", cartRoutes);
appRoutes.use("/api/order", orderRoutes);
appRoutes.use("/api/user", userRoutes);
appRoutes.use("/api/shop", shopRoutes);
appRoutes.use("/api/voucher", voucherRoutes);
appRoutes.use((err: any, req: Request, res: Response, next: NextFunction) => {
  responseError(err, res);
});

export default appRoutes;
