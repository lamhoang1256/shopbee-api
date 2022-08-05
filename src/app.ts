import express from "express";
import expressLoaders from "./loaders/expressLoaders";
import connectMongoDB from "./loaders/mongooseLoader";
import env from "./configs/env";

const app = express();
connectMongoDB();
expressLoaders();
app.listen(env.app.port, () => {
  console.log(`API listening on port ${env.app.port}!`);
});
