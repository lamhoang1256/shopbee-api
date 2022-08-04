const orderControllers = require('../controllers/order.controller');
const router = require('express').Router();

router.post('/', orderControllers.createNewOrder);
router.get('/user', orderControllers.getAllOrderByUser);
router.get('/all', orderControllers.getAllOrderByAdmin);
router.get('/', orderControllers.getSingleOrder);
router.put('/:id/shipping', orderControllers.updateStatusShippingOfOrder);
router.put('/:id/delivered', orderControllers.updateStatusDeliveredOfOrder);

module.exports = router;
