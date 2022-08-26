"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const voucher_controller_1 = __importDefault(require("../controllers/voucher.controller"));
const helpersMiddleware_1 = __importDefault(require("../middlewares/helpersMiddleware"));
const tokenMiddleware_1 = __importDefault(require("../middlewares/tokenMiddleware"));
const voucher_middleware_1 = __importDefault(require("../middlewares/voucher.middleware"));
const voucherRoutes = (0, express_1.Router)();
voucherRoutes.get("/", tokenMiddleware_1.default.verifyTokenAndAdmin, voucher_middleware_1.default.getAllVoucherRules(), helpersMiddleware_1.default.entityValidator, voucher_controller_1.default.getAllVoucher);
voucherRoutes.post("/save", tokenMiddleware_1.default.verifyToken, voucher_middleware_1.default.saveVoucherRules(), helpersMiddleware_1.default.entityValidator, voucher_controller_1.default.saveVoucher);
voucherRoutes.get("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, voucher_controller_1.default.getSingleVoucher);
voucherRoutes.post("/", tokenMiddleware_1.default.verifyTokenAndAdmin, voucher_middleware_1.default.addNewVoucherRules(), helpersMiddleware_1.default.entityValidator, voucher_controller_1.default.addNewVoucher);
voucherRoutes.put("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, voucher_middleware_1.default.updateVoucherRules(), helpersMiddleware_1.default.entityValidator, voucher_controller_1.default.updateVoucher);
voucherRoutes.delete("/:id", helpersMiddleware_1.default.idRule("id"), helpersMiddleware_1.default.idValidator, tokenMiddleware_1.default.verifyTokenAndAdmin, voucher_controller_1.default.deleteVoucher);
exports.default = voucherRoutes;
