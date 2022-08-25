import { body, query } from "express-validator";

const getProductsRules = () => {
  return [
    query("page")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("page không đúng định dạng"),
    query("limit")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("limit không đúng định dạng"),
    query("category")
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage("category không đúng định dạng"),
  ];
};

const getAllProductsRules = () => {
  return [
    query("category")
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage("category không đúng định dạng"),
  ];
};

const getPagesRules = () => {
  return [
    query("limit").isInt().withMessage("limit không đúng định dạng"),
    query("category")
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage("category không đúng định dạng"),
  ];
};

const addProductRules = () => {
  return [
    body("name")
      .exists({ checkFalsy: true })
      .withMessage("Tiêu đề không được để trống")
      .isLength({ max: 200 })
      .withMessage("Tiêu đề  phải ít hơn 200 kí tự"),
    body("image")
      .exists({ checkFalsy: true })
      .withMessage("image không được để trống")
      .isLength({ max: 1000 })
      .withMessage("image  phải ít hơn 1000 kí tự"),
    body("images")
      .if((value: any) => value !== undefined)
      .isArray()
      .withMessage("images phải dạng string[]"),
    body("category")
      .exists({ checkFalsy: true })
      .withMessage("category không được để trống")
      .isMongoId()
      .withMessage(`category phải là id`),
    body("oldPrice")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("oldPrice phải ở định dạng number"),
    body("price")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("price phải ở định dạng number"),
    body("stock")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("stock phải ở định dạng number"),
  ];
};

const updateProductRules = () => {
  return addProductRules();
};

const productMiddleware = {
  addProductRules,
  updateProductRules,
  getProductsRules,
  getPagesRules,
  getAllProductsRules,
};

export default productMiddleware;
