"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const voucher_controller_1 = __importDefault(require("../controllers/voucher.controller"));
const helpers_middleware_1 = __importDefault(require("../middlewares/helpers.middleware"));
const token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
const voucher_middleware_1 = __importDefault(require("../middlewares/voucher.middleware"));
const voucherRoutes = (0, express_1.Router)();
voucherRoutes.get("/", token_middleware_1.default.verifyTokenAndAdmin, voucher_middleware_1.default.getAllVoucherRules(), helpers_middleware_1.default.entityValidator, voucher_controller_1.default.getAllVoucher);
voucherRoutes.get("/discover", voucher_middleware_1.default.getAllVoucherRules(), helpers_middleware_1.default.entityValidator, voucher_controller_1.default.getAllPublicVoucher);
voucherRoutes.post("/save", token_middleware_1.default.verifyToken, voucher_middleware_1.default.saveVoucherRules(), helpers_middleware_1.default.entityValidator, voucher_controller_1.default.saveVoucher);
voucherRoutes.get("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, voucher_controller_1.default.getSingleVoucher);
voucherRoutes.post("/", token_middleware_1.default.verifyTokenAndAdmin, voucher_middleware_1.default.addNewVoucherRules(), helpers_middleware_1.default.entityValidator, voucher_controller_1.default.addNewVoucher);
voucherRoutes.put("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, voucher_middleware_1.default.updateVoucherRules(), helpers_middleware_1.default.entityValidator, voucher_controller_1.default.updateVoucher);
voucherRoutes.delete("/:id", helpers_middleware_1.default.idRule("id"), helpers_middleware_1.default.idValidator, token_middleware_1.default.verifyTokenAndAdmin, voucher_controller_1.default.deleteVoucher);
exports.default = voucherRoutes;
