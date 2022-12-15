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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var notify_controller_1 = require("../apis/controllers/notify.controller");
var socket_service_1 = require("../apis/services/socket.service");
var env_1 = require("../configs/env");
var socketLoaders = function (app) {
    var server = http_1["default"].createServer(app);
    var io = new socket_io_1.Server(server, { cors: { origin: "*", methods: ["GET", "POST"] } });
    io.on("connection", function (socket) {
        socket.on("newUser", function (userId) { return __awaiter(void 0, void 0, void 0, function () {
            var notifications;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        socket_service_1["default"].addNewUser(userId, socket.id);
                        return [4 /*yield*/, notify_controller_1["default"].getAllNotify(userId)];
                    case 1:
                        notifications = _a.sent();
                        io.emit("users", socket_service_1["default"].onlineUsers);
                        io.emit("notifications", notifications);
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("getNotifications", function (userId) { return __awaiter(void 0, void 0, void 0, function () {
            var notifications;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, notify_controller_1["default"].getAllNotify(userId)];
                    case 1:
                        notifications = _a.sent();
                        io.emit("notifications", notifications);
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("handleHaveSeenNotify", function (userId) { return __awaiter(void 0, void 0, void 0, function () {
            var notifications;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, notify_controller_1["default"].updateHaveSeenNotify(userId)];
                    case 1:
                        notifications = _a.sent();
                        io.emit("notifications", notifications);
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("disconnect", function () {
            socket_service_1["default"].removeUser(socket.id);
            io.emit("users", socket_service_1["default"].onlineUsers);
        });
    });
    io.on("connect_error", function (err) {
        console.log("connect_error due to ".concat(err.message));
    });
    server.listen(env_1["default"].app.port, function () {
        console.log("API listening on port ".concat(env_1["default"].app.port, "!"));
    });
    return io;
};
exports["default"] = socketLoaders;
