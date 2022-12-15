"use strict";
exports.__esModule = true;
var express_1 = require("express");
var voucher_controller_1 = require("../controllers/voucher.controller");
var helpers_middleware_1 = require("../middlewares/helpers.middleware");
var token_middleware_1 = require("../middlewares/token.middleware");
var voucher_middleware_1 = require("../middlewares/voucher.middleware");
var voucherRoutes = (0, express_1.Router)();
voucherRoutes.get("/", token_middleware_1["default"].verifyTokenAndAdmin, voucher_middleware_1["default"].getAllVoucherRules(), helpers_middleware_1["default"].entityValidator, voucher_controller_1["default"].getAllVoucher);
voucherRoutes.get("/discover", voucher_middleware_1["default"].getAllVoucherRules(), helpers_middleware_1["default"].entityValidator, voucher_controller_1["default"].getAllPublicVoucher);
voucherRoutes.post("/save", token_middleware_1["default"].verifyToken, voucher_middleware_1["default"].saveVoucherRules(), helpers_middleware_1["default"].entityValidator, voucher_controller_1["default"].saveVoucher);
voucherRoutes.get("/:id", helpers_middleware_1["default"].idRule("id"), helpers_middleware_1["default"].idValidator, voucher_controller_1["default"].getSingleVoucher);
voucherRoutes.post("/", token_middleware_1["default"].verifyTokenAndAdmin, voucher_middleware_1["default"].addNewVoucherRules(), helpers_middleware_1["default"].entityValidator, voucher_controller_1["default"].addNewVoucher);
voucherRoutes.put("/:id", helpers_middleware_1["default"].idRule("id"), helpers_middleware_1["default"].idValidator, token_middleware_1["default"].verifyTokenAndAdmin, voucher_middleware_1["default"].updateVoucherRules(), helpers_middleware_1["default"].entityValidator, voucher_controller_1["default"].updateVoucher);
voucherRoutes["delete"]("/:id", helpers_middleware_1["default"].idRule("id"), helpers_middleware_1["default"].idValidator, token_middleware_1["default"].verifyTokenAndAdmin, voucher_controller_1["default"].deleteVoucher);
exports["default"] = voucherRoutes;
