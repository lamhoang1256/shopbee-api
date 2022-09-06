import authControllers from "../controllers/auth.controller";
import { Router } from "express";
import tokenMiddleware from "../middlewares/token.middleware";
import authMiddleware from "../middlewares/auth.middleware";
import helpersMiddleware from "../middlewares/helpers.middleware";
const authRoutes = Router();

authRoutes.post(
  "/sign-up",
  authMiddleware.signUpRules(),
  helpersMiddleware.entityValidator,
  authMiddleware.rateLimitRequest.signUp,
  authControllers.signUp,
);
authRoutes.post(
  "/sign-in",
  authMiddleware.signInRules(),
  helpersMiddleware.entityValidator,
  authMiddleware.rateLimitRequest.signIn,
  authControllers.signIn,
);
authRoutes.post("/logout", tokenMiddleware.verifyToken, authControllers.logOut);
authRoutes.post("/refresh-token", authControllers.requestRefreshToken);

export default authRoutes;
