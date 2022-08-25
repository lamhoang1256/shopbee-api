import authControllers from "../controllers/auth.controller";
import { Router } from "express";
import tokenMiddleware from "../middlewares/tokenMiddleware";
import authMiddleware from "../middlewares/auth.middleware";
import helpersMiddleware from "../middlewares/helpersMiddleware";
const authRoutes = Router();

authRoutes.post(
  "/sign-up",
  authMiddleware.signUpRules,
  helpersMiddleware.entityValidator,
  authControllers.signUp,
);
authRoutes.post(
  "/sign-in",
  authMiddleware.signInRules,
  helpersMiddleware.entityValidator,
  authControllers.signIn,
);
authRoutes.post("/logout", tokenMiddleware.verifyToken, authControllers.logOut);
authRoutes.post("/refresh-token", authControllers.requestRefreshToken);

export default authRoutes;
