"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expressLoaders_1 = __importDefault(require("./loaders/expressLoaders"));
const mongooseLoader_1 = __importDefault(require("./loaders/mongooseLoader"));
const env_1 = __importDefault(require("./configs/env"));
const app = (0, express_1.default)();
(0, mongooseLoader_1.default)();
(0, expressLoaders_1.default)();
app.listen(env_1.default.app.port, () => {
    console.log(`API listening on port ${env_1.default.app.port}!`);
});
