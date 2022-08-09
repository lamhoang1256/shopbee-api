import authControllers from "../controllers/auth.controller";
import { Router } from "express";
const authRoutes = Router();

authRoutes.post("/sign-up", authControllers.signUp);
authRoutes.post("/sign-in", authControllers.signIn);
authRoutes.post("/logout", authControllers.logOut);
authRoutes.post("/refresh-token", authControllers.refreshToken);

export default authRoutes;
