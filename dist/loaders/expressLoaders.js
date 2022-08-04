"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const expressLoaders = () => {
    const app = (0, express_1.default)();
    app.use((0, cookie_parser_1.default)());
    app.use(body_parser_1.default.json({ limit: "50mb" }));
    app.use((0, cors_1.default)());
    app.get("/", (req, res) => {
        res.status(200).json("This is ecommerce api");
    });
};
exports.default = expressLoaders;
