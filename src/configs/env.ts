import dotenv from "dotenv";
dotenv.config();

const env = {
  node: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
  isDevelopment: process.env.NODE_ENV === "development",
  app: {
    port: process.env.APP_PORT || 8080,
  },
  database: {
    mongoUrl: process.env.MONGODB_URL || "",
  },
  passport: {
    jwtSecretKey: process.env.JWT_SECRET_KEY || "SECRET_KEY",
    expiredAccessToken: process.env.EXPIRE_ACCESS_TOKEN || "30d",
    expiredRefreshToken: process.env.EXPIRED_REFRESH_TOKEN || "365d",
  },
};

export default env;
