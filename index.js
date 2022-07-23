const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

const authRoutes = require("./api/routes/auth.route");
const categoryRoutes = require("./api/routes/category.route");
const productRoutes = require("./api/routes/product.route");
const bannerRoutes = require("./api/routes/banner.route");

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGODB_URL, () => {
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
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    status,
    success: false,
    message,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
