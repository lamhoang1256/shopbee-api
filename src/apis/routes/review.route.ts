import { Router } from "express";
import reviewControllers from "../controllers/review.controller";
import helpersMiddleware from "../middlewares/helpers.middleware";
import reviewMiddleware from "../middlewares/review.middleware";
import tokenMiddleware from "../middlewares/token.middleware";
const reviewRoutes = Router();

reviewRoutes.get("/", reviewControllers.getAllReviewProduct);
reviewRoutes.get(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  reviewControllers.getSingleReview,
);
reviewRoutes.post(
  "/",
  tokenMiddleware.verifyToken,
  reviewMiddleware.addNewReviewRules(),
  helpersMiddleware.entityValidator,
  reviewControllers.addNewReview,
);
reviewRoutes.delete(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyToken,
  reviewControllers.deleteReview,
);
reviewRoutes.put(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyToken,
  reviewMiddleware.updateReviewRules(),
  helpersMiddleware.entityValidator,
  reviewControllers.updateReview,
);

export default reviewRoutes;
