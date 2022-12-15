"use strict";
exports.__esModule = true;
var onlineUsers = [];
var addNewUser = function (userId, socketId) {
    !onlineUsers.some(function (user) { return user.userId === userId; }) && onlineUsers.push({ userId: userId, socketId: socketId });
};
var removeUser = function (socketId) {
    onlineUsers = onlineUsers.filter(function (user) { return (user === null || user === void 0 ? void 0 : user.socketId) !== socketId; });
};
var getUser = function (userId) {
    return onlineUsers.find(function (user) { return (user === null || user === void 0 ? void 0 : user.userId) === userId; });
};
var socketServices = {
    onlineUsers: onlineUsers,
    addNewUser: addNewUser,
    removeUser: removeUser,
    getUser: getUser
};
exports["default"] = socketServices;
