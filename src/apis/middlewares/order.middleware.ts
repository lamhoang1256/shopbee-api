import { body } from "express-validator";

const createNewOrderRules = () => {
  return [
    body("orderItems")
      .if((value: any) => value !== undefined)
      .isArray()
      .withMessage("orderItems phải dạng array"),
    body("price")
      .exists({ checkFalsy: true })
      .withMessage("price không được để trống")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("price phải ở định dạng number"),
    body("promotion")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("promotion phải ở định dạng number"),
    body("shippingFee")
      .exists({ checkFalsy: true })
      .withMessage("shippingFee không được để trống")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("shippingFee phải ở định dạng number"),
    body("total")
      .exists({ checkFalsy: true })
      .withMessage("total không được để trống")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("total phải ở định dạng number"),
    body("shippingTo")
      .if((value: any) => value !== undefined)
      .notEmpty()
      .withMessage("shippingTo không được để trống"),
  ];
};

const orderMiddleware = { createNewOrderRules };

export default orderMiddleware;
