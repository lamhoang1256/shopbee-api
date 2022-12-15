"use strict";
exports.__esModule = true;
var swagger_ui_express_1 = require("swagger-ui-express");
var swagger_jsdoc_1 = require("swagger-jsdoc");
var env_1 = require("../configs/env");
var options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Shopbee api",
            version: "1.0.0",
            description: "A simple api for ecommerce"
        },
        servers: [
            { url: env_1["default"].app.apiUrl },
            { url: "http://localhost:8000/api" },
            { url: "https://e-shopee-api.onrender.com/api" },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    description: "JWT Authorization",
                    type: "https",
                    scheme: "bearer",
                    "in": "header",
                    bearerFormat: "JWT"
                }
            }
        },
        security: {
            bearerAuth: []
        }
    },
    apis: ["**/*.ts"]
};
var docs = (0, swagger_jsdoc_1["default"])(options);
var swaggerLoader = function (app) {
    app.use("/api-docs", swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(docs, { explorer: true }));
};
exports["default"] = swaggerLoader;
