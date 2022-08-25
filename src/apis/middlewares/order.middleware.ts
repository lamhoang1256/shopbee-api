import { body, query } from "express-validator";

const createNewOrderRules = () => {
  return [
    body("orderItems")
      .if((value: any) => value !== undefined)
      .isArray()
      .withMessage("orderItems phải dạng array"),
    body("price")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("price phải ở định dạng number"),
    body("promotion")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("promotion phải ở định dạng number"),
    body("shippingFee")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("shippingFee phải ở định dạng number"),
    body("total")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("total phải ở định dạng number"),
    body("shippingTo")
      .if((value: any) => value !== undefined)
      .notEmpty()
      .withMessage("shippingTo không được để trống"),
  ];
};

const getAllOrderAdminRules = () => {
  return [query("orderId").isMongoId().withMessage(`orderId phải là id`)];
};

const orderMiddleware = { createNewOrderRules, getAllOrderAdminRules };

export default orderMiddleware;
