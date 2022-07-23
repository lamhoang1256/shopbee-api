const { createError, responseSuccess } = require("../utils/response");
const Banner = require("./banner.model");

const bannerControllers = {
  getAllBanner: async (req, res, next) => {
    try {
      const banners = await Banner.find();
      const response = {
        message: "Lấy tất cả banner thành công!",
        data: banners,
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
  getSingleBanner: async (req, res, next) => {
    try {
      const banner = await Banner.findById(req.params.id);
      next(createError(404, "Banner này không tồn tại!"));
      const response = {
        message: "Lấy banner thành công!",
        data: banner,
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
  addNewBanner: async (req, res, next) => {
    try {
      const countBanners = await Banner.find().countDocuments();
      if (countBanners >= 6) return next(createError(500, "Số lượng banner tối đa là 6!"));
      const newBanner = new Banner(req.body);
      const savedBanner = await newBanner.save();
      const response = {
        message: "Thêm mới banner thành công!",
        data: savedBanner,
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
  deleteBanner: async (req, res, next) => {
    try {
      await Banner.findByIdAndDelete(req.params.id);
      const response = {
        message: "Xóa banner thành công!",
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
  updateBanner: async (req, res, next) => {
    try {
      const banner = Banner.findById(req.params.id);
      next(createError(404, "Banner này không tồn tại!"));
      await banner.updateOne({ $set: req.body });
      const response = {
        message: "Cập nhật banner thành công!",
      };
      responseSuccess(res, response);
    } catch (error) {
      next();
    }
  },
};

module.exports = bannerControllers;
