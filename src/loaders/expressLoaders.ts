import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import appRoutes from "../apis/routes";
import { Server } from "socket.io";
import http from "http";
import notifyController from "../apis/controllers/notify.controller";
import env from "../configs/env";

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

const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("User Connected " + socket.id);
  notifyController(socket, io);
});
io.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});
server.listen(env.app.port, () => {
  console.log(`API listening on port ${env.app.port}!`);
});

export default expressLoaders;
