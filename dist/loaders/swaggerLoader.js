"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Shopbee api",
            version: "1.0.0",
            description: "A simple api for ecommerce",
        },
        servers: [
            { url: "http://localhost:8000/api" },
            { url: "https://shopbee-api.herokuapp.com/api" },
        ],
    },
    apis: ["**/*.ts"],
};
const docs = (0, swagger_jsdoc_1.default)(options);
const swaggerLoader = (app) => {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(docs, { explorer: true }));
};
exports.default = swaggerLoader;
