"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expressLoaders_1 = __importDefault(require("./loaders/expressLoaders"));
const mongooseLoader_1 = __importDefault(require("./loaders/mongooseLoader"));
const swaggerLoader_1 = __importDefault(require("./loaders/swaggerLoader"));
(0, mongooseLoader_1.default)();
const app = (0, expressLoaders_1.default)();
(0, swaggerLoader_1.default)(app);
