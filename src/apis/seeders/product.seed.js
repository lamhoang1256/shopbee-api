"use strict";
exports.__esModule = true;
var phone_1 = require("../../data/products/phone");
var fashionBoy_1 = require("../../data/products/fashionBoy");
var fashionGirl_1 = require("../../data/products/fashionGirl");
var books_1 = require("../../data/products/books");
var sportTravel_1 = require("../../data/products/sportTravel");
var foodShop_1 = require("../../data/products/foodShop");
var clock_1 = require("../../data/products/clock");
var lifeHouse_1 = require("../../data/products/lifeHouse");
var laptop_1 = require("../../data/products/laptop");
var electric_1 = require("../../data/products/electric");
var product = phone_1["default"].concat(fashionBoy_1["default"], fashionGirl_1["default"], books_1["default"], sportTravel_1["default"], foodShop_1["default"], clock_1["default"], lifeHouse_1["default"], laptop_1["default"], electric_1["default"]);
exports["default"] = product;