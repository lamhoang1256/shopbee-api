import { body } from "express-validator";

const addToCartRules = () => {
  return [
    body("productId")
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage("productId phải là id"),
    body("quantity")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("quantity phải ở định dạng number"),
  ];
};

const cartMiddleware = {
  addToCartRules,
};

export default cartMiddleware;
