"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = {
    node: process.env.NODE_ENV || "development",
    isProduction: process.env.NODE_ENV === "production",
    isTest: process.env.NODE_ENV === "test",
    isDevelopment: process.env.NODE_ENV === "development",
    app: {
        port: process.env.PORT || 8000,
    },
    database: {
        mongoUrl: process.env.MONGODB_URL || "",
    },
    passport: {
        jwtSecretKey: process.env.JWT_SECRET_KEY || "SECRET_KEY",
        expiredAccessToken: process.env.EXPIRED_ACCESS_TOKEN || "30d",
        expiredRefreshToken: process.env.EXPIRED_REFRESH_TOKEN || "365d",
    },
};
exports.default = env;
