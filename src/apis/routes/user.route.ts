import { Router } from "express";
import userControllers from "../controllers/user.controller";
import helpersMiddleware from "../middlewares/helpers.middleware";
import tokenMiddleware from "../middlewares/token.middleware";
import userMiddleware from "../middlewares/user.middleware";
const userRoutes = Router();

userRoutes.get("/my-voucher", tokenMiddleware.verifyToken, userControllers.getMyVoucher);
userRoutes.get(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyToken,
  userControllers.getSingleUser,
);
userRoutes.get(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  userMiddleware.getAllUserRules(),
  helpersMiddleware.entityValidator,
  userControllers.getAllUser,
);
userRoutes.post(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  userMiddleware.addNewUserRules(),
  helpersMiddleware.entityValidator,
  userControllers.addNewUser,
);
userRoutes.delete(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  userControllers.deleteUser,
);
userRoutes.put(
  "/me",
  tokenMiddleware.verifyToken,
  userMiddleware.updateMeRules(),
  helpersMiddleware.entityValidator,
  userControllers.updateMe,
);
userRoutes.put(
  "/change-password",
  tokenMiddleware.verifyToken,
  userMiddleware.changePasswordMeRules(),
  helpersMiddleware.entityValidator,
  userControllers.changePasswordMe,
);
userRoutes.put(
  "/credit-card",
  tokenMiddleware.verifyToken,
  userMiddleware.updateCreditCardRules(),
  helpersMiddleware.entityValidator,
  userControllers.updateCreditCard,
);
userRoutes.put(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  userMiddleware.updateUserRules(),
  helpersMiddleware.entityValidator,
  userControllers.updateUser,
);

export default userRoutes;
