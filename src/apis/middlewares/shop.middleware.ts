import { body } from "express-validator";

const addShopInfoRules = () => {
  return [
    body("name")
      .exists({ checkFalsy: true })
      .withMessage("name shop không được để trống")
      .isLength({ max: 200 })
      .withMessage("name shop  phải ít hơn 200 kí tự"),
    body("avatar")
      .exists({ checkFalsy: true })
      .withMessage("avatar không được để trống")
      .isLength({ max: 1000 })
      .withMessage("avatar phải ít hơn 1000 kí tự"),
    body("street")
      .if((value: any) => value !== undefined)
      .isLength({ max: 300 })
      .withMessage("Địa chỉ đường phải ít hơn 300 kí tự"),
    body("address")
      .if((value: any) => value !== undefined)
      .isLength({ max: 500 })
      .withMessage("Địa chỉ phải ít hơn 500 kí tự"),
  ];
};

const updateShopInfoRules = () => {
  return addShopInfoRules();
};

const shopMiddleware = { addShopInfoRules, updateShopInfoRules };

export default shopMiddleware;
