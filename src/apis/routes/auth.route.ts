import authControllers from "../controllers/auth.controller";
import { Router } from "express";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const authRoutes = Router();

authRoutes.post("/sign-up", authControllers.signUp);
authRoutes.post("/sign-in", authControllers.signIn);
authRoutes.post("/logout", tokenMiddleware.verifyToken, authControllers.logOut);
authRoutes.post("/refresh-token", authControllers.requestRefreshToken);

export default authRoutes;
