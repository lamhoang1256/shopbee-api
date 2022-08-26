import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shopbee api",
      version: "1.0.0",
      description: "A simple api for ecommerce",
    },
    servers: [{ url: "http://localhost:8000/api" }],
  },
  apis: ["**/*.ts"],
};
const docs = swaggerJsDoc(options);
const swaggerLoader = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs, { explorer: true }));
};

export default swaggerLoader;
