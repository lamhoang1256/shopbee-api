"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const voucher_service_1 = __importDefault(require("../services/voucher.service"));
const catch_async_1 = require("../utils/catch-async");
const response_1 = require("../utils/response");
const getSingleVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddress = yield voucher_service_1.default.getSingleVoucher(req);
    (0, response_1.responseSuccess)(res, shopAddress);
}));
const applyVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddress = yield voucher_service_1.default.applyVoucher(req);
    (0, response_1.responseSuccess)(res, shopAddress);
}));
const getAllVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shopAddressList = yield voucher_service_1.default.getAllVoucher(req);
    (0, response_1.responseSuccess)(res, shopAddressList);
}));
const addNewVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAddress = yield voucher_service_1.default.addNewVoucher(req);
    (0, response_1.responseSuccess)(res, newAddress);
}));
const updateVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAddress = yield voucher_service_1.default.updateVoucher(req);
    (0, response_1.responseSuccess)(res, updatedAddress);
}));
const deleteVoucher = (0, catch_async_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAddress = yield voucher_service_1.default.deleteVoucher(req);
    (0, response_1.responseSuccess)(res, deletedAddress);
}));
const shopControllers = {
    getSingleVoucher,
    getAllVoucher,
    addNewVoucher,
    updateVoucher,
    deleteVoucher,
    applyVoucher,
};
exports.default = shopControllers;
