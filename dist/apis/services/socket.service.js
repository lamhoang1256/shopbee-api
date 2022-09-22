"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let onlineUsers = [];
const addNewUser = (userId, socketId) => {
    !onlineUsers.some((user) => user.userId === userId) && onlineUsers.push({ userId, socketId });
};
const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => (user === null || user === void 0 ? void 0 : user.socketId) !== socketId);
};
const getUser = (userId) => {
    return onlineUsers.find((user) => (user === null || user === void 0 ? void 0 : user.userId) === userId);
};
const socketServices = {
    onlineUsers,
    addNewUser,
    removeUser,
    getUser,
};
exports.default = socketServices;
