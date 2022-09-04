import { INotify } from "../../@types/notify";
import { io } from "../../loaders/expressLoaders";
import Notify from "../models/notify.model";

let onlineUsers: any[] = [];

const addNewUser = (userId: string, socketId: string) => {
  !onlineUsers.some((user) => user.userId === userId) && onlineUsers.push({ userId, socketId });
};
const removeUser = (socketId: string) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};
const getUser = (userId: string) => {
  return onlineUsers.find((user) => user.userId === userId);
};
export const addNewNotify = async (notify: INotify) => {
  const newNotify = new Notify(notify);
  await newNotify.save();
  const receiver = getUser(notify.user.toString());
  let notifies: any = await Notify.find({ user: notify.user }).sort({ createdAt: -1 });
  const totalNotify = notifies.length;
  if (totalNotify >= 10) await Notify.deleteOne({ _id: notifies[totalNotify - 1]._id });
  io.to(receiver.socketId).emit("notifies", notifies);
};

const notifyController = (socket: any, io: any) => {
  socket.on("newUser", (userId: string) => {
    addNewUser(userId, socket.id);
    io.emit("users", onlineUsers);
  });
  socket.on("disconnect", () => {
    removeUser(socket.id);
    io.emit("users", onlineUsers);
  });
};

export default notifyController;
