const Product = require("./product.model");

const productControllers = {
  addNewProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product delected successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const product = Product.findById(req.params.id);
      await product.updateOne({ $set: req.body });
      res.status(200).json("Product updated successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productControllers;
