const purchaseControllers = require("../controllers/purchase.controlller");
const router = require("express").Router();

router.post("/add-to-cart", purchaseControllers.addToCart);

module.exports = router;
