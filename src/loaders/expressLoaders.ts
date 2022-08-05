import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import appRoutes from "../apis/routes";

const expressLoaders = () => {
  const app = express();
  app.use(cookieParser());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(cors());
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json("This is ecommerce api");
  });
  app.use(appRoutes);
};

export default expressLoaders;
