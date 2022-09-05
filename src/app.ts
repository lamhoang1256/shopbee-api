import expressLoaders from "./loaders/expressLoaders";
import connectMongoDB from "./loaders/mongooseLoader";
import socketLoaders from "./loaders/socketLoader";
import swaggerLoader from "./loaders/swaggerLoader";

connectMongoDB();
export const app = expressLoaders();
swaggerLoader(app);
export const io = socketLoaders(app);
