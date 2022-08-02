const { createError, responseSuccess } = require("../utils/response");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const userControllers = {
  updateProfile: async (req, res, next) => {
    try {
      const user = await User.findById(req.body._id);
      if (!user) return createError(404, "Không tìm thấy thông tin người dùng!");
      const updatedUser = await user.updateOne({ $set: req.body });
      const response = {
        message: "Cập nhật thông tin thành công!",
        data: updatedUser,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },

  changePassword: async (req, res, next) => {
    try {
      const userDB = await User.findById(req.body._id);
      if (!userDB) return createError(404, "Không tìm thấy thông tin người dùng!");
      if (!req.body.currentPassword && !req.body.newPassword)
        return createError(404, "Không tìm thấy mật khẩu và mật khẩu mới!");
      const validPassword = await bcrypt.compare(req.body.currentPassword, userDB.password);
      if (!validPassword) return next(createError(422, "Mật khẩu hiện tại không đúng"));
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.newPassword, salt);
      const updatedUser = await userDB.updateOne({ $set: { password: hashed } });
      const response = {
        message: "Đổi mật khẩu thành công!",
        data: updatedUser,
      };
      responseSuccess(res, response);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userControllers;
