import { body } from "express-validator";

const addNewReviewRules = () => {
  return [
    body("productId")
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage("productId phải là id"),
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

const updateReviewRules = () => {
  return [
    body("productId")
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage("productId phải là id"),
    body("reviewId")
      .if((value: any) => value !== undefined)
      .isMongoId()
      .withMessage("reviewId phải là id"),
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

const reviewMiddleware = {
  addNewReviewRules,
  updateReviewRules,
};

export default reviewMiddleware;
