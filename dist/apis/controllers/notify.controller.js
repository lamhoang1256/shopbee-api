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
const app_1 = require("../../app");
const notify_model_1 = __importDefault(require("../models/notify.model"));
const socket_service_1 = __importDefault(require("../services/socket.service"));
const addNewNotify = (notify) => __awaiter(void 0, void 0, void 0, function* () {
    const newNotify = new notify_model_1.default(notify);
    yield newNotify.save();
    const receiver = socket_service_1.default.getUser(notify.user.toString());
    let notifies = yield notify_model_1.default.find({ user: notify.user }).sort({ createdAt: -1 });
    const totalNotify = notifies.length;
    if (totalNotify >= 10)
        yield notify_model_1.default.deleteOne({ _id: notifies[totalNotify - 1]._id });
    app_1.io.to(receiver.socketId).emit("notifications", notifies);
});
const getAllNotify = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    let notifies = yield notify_model_1.default.find({ user: userId }).sort({ createdAt: -1 });
    const totalNotify = notifies.length;
    if (totalNotify >= 10)
        yield notify_model_1.default.deleteOne({ _id: notifies[totalNotify - 1]._id });
    return notifies;
});
const notifyController = {
    addNewNotify,
    getAllNotify,
};
exports.default = notifyController;
