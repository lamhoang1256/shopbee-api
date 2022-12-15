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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var wishlist_model_1 = require("../models/wishlist.model");
var getMyWishlist = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var wishlistsDB, wishlists, response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, wishlist_model_1["default"].findOne({ user: req.user._id })
                    .populate({ path: "wishlists" })
                    .lean()];
            case 1:
                wishlistsDB = _b.sent();
                wishlists = (wishlistsDB === null || wishlistsDB === void 0 ? void 0 : wishlistsDB.wishlists) ? (_a = wishlistsDB === null || wishlistsDB === void 0 ? void 0 : wishlistsDB.wishlists) === null || _a === void 0 ? void 0 : _a.reverse() : [];
                response = {
                    message: "Lấy danh sách yêu thích thành công!",
                    data: wishlists
                };
                return [2 /*return*/, response];
        }
    });
}); };
var addToWishlist = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, wishlistDB, savedWishlist, values, newWishlist, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.query.productId;
                return [4 /*yield*/, wishlist_model_1["default"].findOne({ user: req.user._id })];
            case 1:
                wishlistDB = _a.sent();
                if (!!wishlistDB) return [3 /*break*/, 3];
                values = { user: req.user._id, wishlists: [productId] };
                return [4 /*yield*/, wishlist_model_1["default"].create(values)];
            case 2:
                newWishlist = _a.sent();
                savedWishlist = newWishlist.save();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, wishlistDB.updateOne({
                    $addToSet: { wishlists: productId }
                })];
            case 4:
                savedWishlist = _a.sent();
                _a.label = 5;
            case 5:
                response = { message: "Đã thêm vào danh sách yêu thích!", data: savedWishlist };
                return [2 /*return*/, response];
        }
    });
}); };
var removeFromWishlist = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, updateWishlist, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.query.productId;
                return [4 /*yield*/, wishlist_model_1["default"].findByIdAndUpdate(req.user._id, {
                        $pull: { wishlists: productId }
                    })];
            case 1:
                updateWishlist = _a.sent();
                response = { message: "Đã xóa khỏi danh sách yêu thích!", data: updateWishlist };
                return [2 /*return*/, response];
        }
    });
}); };
var wishlistServices = {
    addToWishlist: addToWishlist,
    getMyWishlist: getMyWishlist,
    removeFromWishlist: removeFromWishlist
};
exports["default"] = wishlistServices;
