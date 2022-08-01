const userControllers = require("../controllers/user.controller");
const userRouter = require("express").Router();

userRouter.put("/", userControllers.updateProfile);

module.exports = userRouter;
