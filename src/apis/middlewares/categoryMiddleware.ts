import { body, param } from "express-validator";

const addNewCategoryRules = () => {
  return [
    body("name")
      .exists({ checkFalsy: true })
      .withMessage("name không được để trống")
      .isLength({ max: 160 })
      .withMessage("Tên phải ít hơn 160 kí tự"),
    body("slug")
      .exists({ checkFalsy: true })
      .withMessage("slug không được để trống")
      .isLength({ max: 200 })
      .withMessage("Tên phải ít hơn 200 kí tự"),
    body("image")
      .exists({ checkFalsy: true })
      .withMessage("image không được để trống")
      .isLength({ max: 1000 })
      .withMessage("image phải ít hơn 1000 kí tự"),
  ];
};

const updateCategoryRules = () => {
  return addNewCategoryRules();
};

const getCategoryRules = () => {
  return [
    param("id")
      .if((value: any) => value)
      .isMongoId()
      .withMessage("id không đúng định dạng"),
  ];
};

const categoryMiddleware = {
  addNewCategoryRules,
  updateCategoryRules,
  getCategoryRules,
};

export default categoryMiddleware;
