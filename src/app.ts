import express from "express";
import expressLoaders from "./loaders/expressLoaders";
import connectMongoDB from "./loaders/mongooseLoader";
import appRoutes from "./apis/routes";
import env from "./configs/env";

const app = express();
expressLoaders();
app.use(appRoutes);
connectMongoDB();
app.listen(env.app.port, () => {
  console.log(`API listening on port ${env.app.port}!`);
});
