import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import authRoutes from "./apis/routes/auth.route";
import bannerRoutes from "./apis/routes/banner.route";
import categoryRoutes from "./apis/routes/category.route";
import productRoutes from "./apis/routes/product.route";
import cartRoutes from "./apis/routes/cart.route";
import orderRoutes from "./apis/routes/order.route";
import userRoutes from "./apis/routes/user.route";
import { responseError } from "./apis/middlewares/responseError";

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGODB_URL || "", () => {
  console.log("Connected to MongoDB");
});

app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json("This is ecommerce api");
});
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/user", userRoutes);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  responseError(err, res);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
