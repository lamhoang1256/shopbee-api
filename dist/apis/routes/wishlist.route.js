"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wishlist_controller_1 = __importDefault(require("../controllers/wishlist.controller"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const wishlist_middleware_1 = __importDefault(require("../middlewares/wishlist.middleware"));
const wishlistRoutes = (0, express_1.Router)();
wishlistRoutes.get("/", token_middleware_1.default.verifyToken, wishlist_controller_1.default.getMyWishlist);
wishlistRoutes.post("/", token_middleware_1.default.verifyToken, wishlist_middleware_1.default.addToWishlistRules(), helpers_middleware_1.default.entityValidator, wishlist_controller_1.default.addToWishlist);
wishlistRoutes.delete("/", token_middleware_1.default.verifyToken, wishlist_middleware_1.default.removeFromWishlist(), helpers_middleware_1.default.entityValidator, wishlist_controller_1.default.removeFromWishlist);
exports.default = wishlistRoutes;
