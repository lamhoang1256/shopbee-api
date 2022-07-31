const cartControllers = require("../controllers/cart.controller");
const router = require("express").Router();

router.post("/add-to-cart", cartControllers.addToCart);
router.get("/", cartControllers.getAllCart);
router.delete("/", cartControllers.deleteSingleCart);
router.delete("/all", cartControllers.deleteCarts);
router.post("/payment", cartControllers.buyProducts);

module.exports = router;
