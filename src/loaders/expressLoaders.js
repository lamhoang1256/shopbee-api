"use strict";
exports.__esModule = true;
var body_parser_1 = require("body-parser");
var cookie_parser_1 = require("cookie-parser");
var cors_1 = require("cors");
var express_1 = require("express");
var routes_1 = require("../apis/routes");
var app = (0, express_1["default"])();
var expressLoaders = function () {
    app.use((0, cookie_parser_1["default"])());
    app.use(body_parser_1["default"].json({ limit: "50mb" }));
    app.use((0, cors_1["default"])());
    app.get("/", function (req, res) {
        res.status(200).json("This is ecommerce api");
    });
    app.use(routes_1["default"]);
    return app;
};
exports["default"] = expressLoaders;
