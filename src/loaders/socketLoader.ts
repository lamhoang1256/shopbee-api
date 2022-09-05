import { Express } from "express";
import http from "http";
import { Server } from "socket.io";
import notifyController from "../apis/controllers/notify.controller";
import socketServices from "../apis/services/socket.service";
import env from "../configs/env";

const socketLoaders = (app: Express) => {
  const server = http.createServer(app);
  const io = new Server(server, { cors: { origin: "*", methods: ["GET", "POST"] } });
  io.on("connection", (socket) => {
    socket.on("newUser", async (userId: string) => {
      socketServices.addNewUser(userId, socket.id);
      const notifications = await notifyController.getAllNotify(userId);
      io.emit("users", socketServices.onlineUsers);
      io.emit("notifications", notifications);
    });
    socket.on("getNotifications", async (userId: string) => {
      const notifications = await notifyController.getAllNotify(userId);
      io.emit("notifications", notifications);
    });
    socket.on("handleHaveSeenNotify", async (userId: string) => {
      const notifications = await notifyController.updateHaveSeenNotify(userId);
      io.emit("notifications", notifications);
    });
    socket.on("disconnect", () => {
      socketServices.removeUser(socket.id);
      io.emit("users", socketServices.onlineUsers);
    });
  });
  io.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });
  server.listen(env.app.port, () => {
    console.log(`API listening on port ${env.app.port}!`);
  });
  return io;
};

export default socketLoaders;
