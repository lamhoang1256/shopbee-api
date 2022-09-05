"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const notify_controller_1 = __importDefault(require("../apis/controllers/notify.controller"));
const socket_service_1 = __importDefault(require("../apis/services/socket.service"));
const env_1 = __importDefault(require("../configs/env"));
const socketLoaders = (app) => {
    const server = http_1.default.createServer(app);
    const io = new socket_io_1.Server(server, { cors: { origin: "*", methods: ["GET", "POST"] } });
    io.on("connection", (socket) => {
        console.log("User Connected " + socket.id);
        socket.on("newUser", (userId) => {
            socket_service_1.default.addNewUser(userId, socket.id);
            io.emit("users", socket_service_1.default.onlineUsers);
        });
        socket.on("getNotifications", (userId) => __awaiter(void 0, void 0, void 0, function* () {
            const notifications = yield notify_controller_1.default.getAllNotify(userId);
            io.emit("notifications", notifications);
        }));
        socket.on("handleHaveSeenNotify", (userId) => __awaiter(void 0, void 0, void 0, function* () {
            const notifications = yield notify_controller_1.default.updateHaveSeenNotify(userId);
            io.emit("notifications", notifications);
        }));
        socket.on("disconnect", () => {
            socket_service_1.default.removeUser(socket.id);
            io.emit("users", socket_service_1.default.onlineUsers);
        });
    });
    io.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
    server.listen(env_1.default.app.port, () => {
        console.log(`API listening on port ${env_1.default.app.port}!`);
    });
    return io;
};
exports.default = socketLoaders;
