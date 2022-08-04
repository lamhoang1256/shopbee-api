import authControllers from "../controllers/auth.controller";
import { Router } from "express";

const authRoutes = Router();

authRoutes.post("/sign-up", authControllers.signUp);
// authRouter.post("/sign-in", authControllers.signIn);
// authRouter.post("/refresh-token", authControllers.requestRefreshToken);

export default authRoutes;
