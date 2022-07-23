const Banner = require("./banner.model");

const bannerControllers = {
  getAllBanner: async (req, res) => {
    try {
      const banners = await Banner.find();
      res
        .status(200)
        .json({ status: "success", message: "Get all banners successfully!", data: banners });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getSingleBanner: async (req, res) => {
    try {
      const banner = await Banner.findById(req.params.id);
      res
        .status(200)
        .json({ status: "success", message: "Get a banner successfully!", data: banner });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addNewBanner: async (req, res) => {
    try {
      const countBanners = await Banner.find().countDocuments();
      if (countBanners >= 6) {
        return res
          .status(500)
          .json({ status: "error", message: "The maximum number of banners is 6" });
      }
      const newBanner = new Banner(req.body);
      const savedBanner = await newBanner.save();
      res
        .status(200)
        .json({ status: "success", message: "Add new banner successfully!", data: savedBanner });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteBanner: async (req, res) => {
    try {
      await Banner.findByIdAndDelete(req.params.id);
      res.status(200).json({ status: "success", message: "Banner deleted successfully!" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateBanner: async (req, res) => {
    try {
      const banner = Banner.findById(req.params.id);
      await banner.updateOne({ $set: req.body });
      res.status(200).json({ status: "success", message: "Banner updated successfully!" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bannerControllers;
