"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const shop_controller_1 = __importDefault(require("../controllers/shop.controller"));
const express_1 = require("express");
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const shopRoutes = (0, express_1.Router)();
shopRoutes.get(
  "/address",
  tokenMiddleware_1.default.verifyTokenAndAdmin,
  shop_controller_1.default.getAllShop,
);
shopRoutes.get(
  "/address/:id",
  tokenMiddleware_1.default.verifyTokenAndAdmin,
  shop_controller_1.default.getSingleShop,
);
shopRoutes.post(
  "/address/",
  tokenMiddleware_1.default.verifyTokenAndAdmin,
  shop_controller_1.default.addNewShop,
);
shopRoutes.put(
  "/address/:id",
  tokenMiddleware_1.default.verifyTokenAndAdmin,
  shop_controller_1.default.updateShop,
);
shopRoutes.put(
  "/address/:id/default",
  tokenMiddleware_1.default.verifyTokenAndAdmin,
  shop_controller_1.default.changeShopAddressDefault,
);
shopRoutes.delete(
  "/address/:id",
  tokenMiddleware_1.default.verifyTokenAndAdmin,
  shop_controller_1.default.deleteShop,
);
exports.default = shopRoutes;
