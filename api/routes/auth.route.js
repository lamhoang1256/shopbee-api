const authControllers = require("../controllers/auth.controller");
const authRouter = require("express").Router();

authRouter.post("/sign-up", authControllers.signUp);
authRouter.post("/sign-in", authControllers.signIn);

module.exports = authRouter;
