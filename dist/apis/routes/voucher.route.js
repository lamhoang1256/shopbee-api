"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const voucher_controller_1 = __importDefault(require("../controllers/voucher.controller"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const voucherRoutes = (0, express_1.Router)();
voucherRoutes.get("/", tokenMiddleware_1.default.verifyTokenAndAdmin, voucher_controller_1.default.getAllVoucher);
voucherRoutes.post("/save", tokenMiddleware_1.default.verifyToken, voucher_controller_1.default.saveVoucher);
voucherRoutes.get("/:id", voucher_controller_1.default.getSingleVoucher);
voucherRoutes.post("/", tokenMiddleware_1.default.verifyTokenAndAdmin, voucher_controller_1.default.addNewVoucher);
voucherRoutes.put("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, voucher_controller_1.default.updateVoucher);
voucherRoutes.delete("/:id", tokenMiddleware_1.default.verifyTokenAndAdmin, voucher_controller_1.default.deleteVoucher);
exports.default = voucherRoutes;
