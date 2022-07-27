const authControllers = require("../controllers/auth.controller");
const authRouter = require("express").Router();

authRouter.post("/sign-up", authControllers.signUp);
authRouter.post("/sign-in", authControllers.signIn);
authRouter.post("/refresh-token", authControllers.requestRefreshToken);

module.exports = authRouter;
