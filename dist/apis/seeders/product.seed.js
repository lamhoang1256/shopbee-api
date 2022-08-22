"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phone_1 = __importDefault(require("../../data/products/phone"));
const fashionBoy_1 = __importDefault(require("../../data/products/fashionBoy"));
const fashionGirl_1 = __importDefault(require("../../data/products/fashionGirl"));
const books_1 = __importDefault(require("../../data/products/books"));
const sportTravel_1 = __importDefault(require("../../data/products/sportTravel"));
const foodShop_1 = __importDefault(require("../../data/products/foodShop"));
const clock_1 = __importDefault(require("../../data/products/clock"));
const lifeHouse_1 = __importDefault(require("../../data/products/lifeHouse"));
const laptop_1 = __importDefault(require("../../data/products/laptop"));
const electric_1 = __importDefault(require("../../data/products/electric"));
const product = phone_1.default.concat(fashionBoy_1.default, fashionGirl_1.default, books_1.default, sportTravel_1.default, foodShop_1.default, clock_1.default, lifeHouse_1.default, laptop_1.default, electric_1.default);
exports.default = product;
