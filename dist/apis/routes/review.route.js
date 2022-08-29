"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_controller_1 = __importDefault(require("../controllers/review.controller"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const review_middleware_1 = __importDefault(require("../middlewares/review.middleware"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const reviewRoutes = (0, express_1.Router)();
reviewRoutes.get("/product/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, review_controller_1.default.getAllReviewProduct);
reviewRoutes.get("/order/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, review_controller_1.default.getAllReviewOrder);
reviewRoutes.get("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, review_controller_1.default.getSingleReview);
reviewRoutes.post("/", token_middleware_1.default.verifyToken, review_middleware_1.default.addNewReviewRules(), helpers_middleware_1.default.entityValidator, review_controller_1.default.addNewReview);
reviewRoutes.delete("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyToken, review_controller_1.default.deleteReview);
reviewRoutes.put("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyToken, review_middleware_1.default.updateReviewRules(), helpers_middleware_1.default.entityValidator, review_controller_1.default.updateReview);
exports.default = reviewRoutes;
