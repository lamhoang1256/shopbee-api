import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import appRoutes from "../apis/routes";

const app = express();
const expressLoaders = () => {
  app.use(cookieParser());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(cors());
  app.get("/", (req, res) => {
    res.status(200).json("This is ecommerce api");
  });
  app.use(appRoutes);
  return app;
};

export default expressLoaders;
