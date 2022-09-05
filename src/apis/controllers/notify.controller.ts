import { INotify } from "../../@types/notify";
import { io } from "../../app";
import Notify from "../models/notify.model";
import socketServices from "../services/socket.service";

const addNewNotify = async (notify: INotify) => {
  const newNotify = new Notify(notify);
  await newNotify.save();
  const receiver = socketServices.getUser(notify.user.toString());
  let notifies: any = await Notify.find({ user: notify.user }).sort({ createdAt: -1 });
  const totalNotify = notifies.length;
  if (totalNotify >= 10) await Notify.deleteOne({ _id: notifies[totalNotify - 1]._id });
  io.to(receiver.socketId).emit("notifications", notifies);
};

const getAllNotify = async (userId: string) => {
  let notifies: any = await Notify.find({ user: userId }).sort({ createdAt: -1 });
  const totalNotify = notifies.length;
  if (totalNotify >= 10) await Notify.deleteOne({ _id: notifies[totalNotify - 1]._id });
  return notifies;
};

const notifyController = {
  addNewNotify,
  getAllNotify,
};

export default notifyController;
