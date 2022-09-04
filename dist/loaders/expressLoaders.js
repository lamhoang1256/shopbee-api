"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../apis/routes"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const notify_controller_1 = __importDefault(require("../apis/controllers/notify.controller"));
const env_1 = __importDefault(require("../configs/env"));
const app = (0, express_1.default)();
const expressLoaders = () => {
    app.use((0, cookie_parser_1.default)());
    app.use(body_parser_1.default.json({ limit: "50mb" }));
    app.use((0, cors_1.default)());
    app.get("/", (req, res) => {
        res.status(200).json("This is ecommerce api");
    });
    app.use(routes_1.default);
    return app;
};
const server = http_1.default.createServer(app);
exports.io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
exports.io.on("connection", (socket) => {
    console.log("User Connected " + socket.id);
    (0, notify_controller_1.default)(socket, exports.io);
});
exports.io.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
});
server.listen(env_1.default.app.port, () => {
    console.log(`API listening on port ${env_1.default.app.port}!`);
});
exports.default = expressLoaders;
