"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.app = void 0;
const expressLoaders_1 = __importDefault(require("./loaders/expressLoaders"));
const mongooseLoader_1 = __importDefault(require("./loaders/mongooseLoader"));
const socketLoader_1 = __importDefault(require("./loaders/socketLoader"));
const swaggerLoader_1 = __importDefault(require("./loaders/swaggerLoader"));
(0, mongooseLoader_1.default)();
exports.app = (0, expressLoaders_1.default)();
(0, swaggerLoader_1.default)(exports.app);
exports.io = (0, socketLoader_1.default)(exports.app);
