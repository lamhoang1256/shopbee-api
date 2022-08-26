import expressLoaders from "./loaders/expressLoaders";
import connectMongoDB from "./loaders/mongooseLoader";
import swaggerLoader from "./loaders/swaggerLoader";

connectMongoDB();
const app = expressLoaders();
swaggerLoader(app);
