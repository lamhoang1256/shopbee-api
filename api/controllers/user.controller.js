const { createError, responseSuccess } = require("../utils/response");
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
};

module.exports = userControllers;
