import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import appRoutes from "../apis/routes";
import env from "../configs/env";

const expressLoaders = () => {
  const app = express();
  app.use(cookieParser());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(cors());
  app.get("/", (req, res) => {
    res.status(200).json("This is ecommerce api");
  });
  app.use(appRoutes);
  app.listen(env.app.port, () => {
    console.log(`API listening on port ${env.app.port}!`);
  });
  return app;
};

export default expressLoaders;
