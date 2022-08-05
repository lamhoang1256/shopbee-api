"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../apis/routes"));
const env_1 = __importDefault(require("../configs/env"));
const expressLoaders = () => {
    const app = (0, express_1.default)();
    app.use((0, cookie_parser_1.default)());
    app.use(body_parser_1.default.json({ limit: "50mb" }));
    app.use((0, cors_1.default)());
    app.get("/", (req, res) => {
        res.status(200).json("This is ecommerce api");
    });
    app.use(routes_1.default);
    app.listen(env_1.default.app.port, () => {
        console.log(`API listening on port ${env_1.default.app.port}!`);
    });
    return app;
};
exports.default = expressLoaders;
