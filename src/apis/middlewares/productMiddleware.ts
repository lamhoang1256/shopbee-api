import { body, query } from "express-validator";

const getProductsRules = () => {
  return [
    query("page")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("page phải ở định dạng number"),
    query("limit")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("limit phải ở định dạng number"),
    query("category")
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage("category phải là id"),
    query("rating")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("rating phải ở định dạng number"),
    query("price_max")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("price_max phải ở định dạng number"),
    query("price_min")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("price_min phải ở định dạng number"),
  ];
};

const addProductRules = () => {
  return [
    body("name")
      .exists({ checkFalsy: true })
      .withMessage("name sản phẩm không được để trống")
      .isLength({ max: 200 })
      .withMessage("name sản phẩm  phải ít hơn 200 kí tự"),
    body("image")
      .exists({ checkFalsy: true })
      .withMessage("image không được để trống")
      .isLength({ max: 1000 })
      .withMessage("image phải ít hơn 1000 kí tự"),
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

const addNewReviewRules = () => {
  return [
    body("rating")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("rating phải ở định dạng number"),
    body("comment")
      .exists({ checkFalsy: true })
      .withMessage("comment không được để trống")
      .isLength({ max: 8000 })
      .withMessage("comment  phải ít hơn 8000 kí tự"),
  ];
};

const updateProductRules = () => {
  return addProductRules();
};

const updateReviewRules = () => {
  return addNewReviewRules();
};

const productMiddleware = {
  addProductRules,
  updateProductRules,
  getProductsRules,
  addNewReviewRules,
  updateReviewRules,
};

export default productMiddleware;
