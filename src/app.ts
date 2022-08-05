import expressLoaders from "./loaders/expressLoaders";
import connectMongoDB from "./loaders/mongooseLoader";

connectMongoDB();
expressLoaders();
