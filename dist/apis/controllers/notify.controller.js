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
exports.addNewNotify = void 0;
const expressLoaders_1 = require("../../loaders/expressLoaders");
const notify_model_1 = __importDefault(require("../models/notify.model"));
let onlineUsers = [];
const addNewUser = (userId, socketId) => {
    !onlineUsers.some((user) => user.userId === userId) && onlineUsers.push({ userId, socketId });
};
const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};
const getUser = (userId) => {
    return onlineUsers.find((user) => user.userId === userId);
};
const addNewNotify = (notify) => __awaiter(void 0, void 0, void 0, function* () {
    const newNotify = new notify_model_1.default(notify);
    yield newNotify.save();
    const receiver = getUser(notify.user.toString());
    let notifies = yield notify_model_1.default.find({ user: notify.user }).sort({ createdAt: -1 });
    const totalNotify = notifies.length;
    if (totalNotify >= 10)
        yield notify_model_1.default.deleteOne({ _id: notifies[totalNotify - 1]._id });
    expressLoaders_1.io.to(receiver.socketId).emit("notifies", notifies);
});
exports.addNewNotify = addNewNotify;
const notifyController = (socket, io) => {
    socket.on("newUser", (userId) => {
        addNewUser(userId, socket.id);
        io.emit("users", onlineUsers);
    });
    socket.on("disconnect", () => {
        removeUser(socket.id);
        io.emit("users", onlineUsers);
    });
};
exports.default = notifyController;
