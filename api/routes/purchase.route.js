const purchaseControllers = require("../controllers/purchase.controlller");
const router = require("express").Router();

router.post("/add-to-cart", purchaseControllers.addToCart);
router.get("/", purchaseControllers.getAllPurchase);
router.delete("/", purchaseControllers.deletePurchases);
router.post("/payment", purchaseControllers.buyProducts);

module.exports = router;
