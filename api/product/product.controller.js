const Product = require("./product.model");

const productControllers = {
  addNewProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res
        .status(200)
        .json({ status: "success", message: "Add new product successfully!", data: savedProduct });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllProductWithConditional: async (req, res) => {
    try {
      const pageSize = 1;
      const page = Number(req.query.page) || 1;
      const keyword = req.query.keyword
        ? {
            name: {
              $regex: req.query.keyword,
              $options: "i",
            },
          }
        : {};
      const countProducts = await Product.countDocuments({ ...keyword });
      const products = await Product.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ _id: -1 });
      res.status(200).json({
        status: "success",
        message: "Get all products successfully!",
        data: { products, page, pages: Math.ceil(countProducts / pageSize) },
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res
        .status(200)
        .json({ status: "success", message: "Get all products successfully!", data: products });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res
        .status(200)
        .json({ status: "success", message: "Get a product successfully!", data: product });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({ status: "success", message: "Product deleted successfully!" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const product = Product.findById(req.params.id);
      await product.updateOne({ $set: req.body });
      res.status(200).json({ status: "success", message: "Product updated successfully!" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productControllers;
