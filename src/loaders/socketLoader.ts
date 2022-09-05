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
    console.log("User Connected " + socket.id);
    socket.on("newUser", (userId: string) => {
      socketServices.addNewUser(userId, socket.id);
      io.emit("users", socketServices.onlineUsers);
    });
    socket.on("getNotifications", async (userId: string) => {
      const notifications = await notifyController.getAllNotify(userId);
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
