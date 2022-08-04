const userControllers = require('../controllers/user.controller');
const userRouter = require('express').Router();

userRouter.put('/', userControllers.updateProfile);
userRouter.put('/change-password', userControllers.changePassword);

module.exports = userRouter;
