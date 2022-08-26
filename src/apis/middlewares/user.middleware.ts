import { body } from "express-validator";

const addNewUserRules = () => {
  return [
    body("email")
      .isEmail()
      .withMessage("Email không đúng định dạng")
      .isLength({ min: 6, max: 160 })
      .withMessage("Email phải từ 6-160 kí tự"),
    body("fullname")
      .exists({ checkFalsy: true })
      .withMessage("Họ tên không được để trống")
      .isLength({ max: 160 })
      .withMessage("Họ tên phải ít hơn 160 kí tự"),
    body("password").isLength({ min: 6, max: 160 }).withMessage("Mật khẩu phải từ 6-160 kí tự"),
    body("address")
      .if((value: any) => value !== undefined)
      .isLength({ max: 1000 })
      .withMessage("Địa chỉ phải ít hơn 1000 kí tự"),
    body("phone")
      .if((value: any) => value !== undefined)
      .isLength({ max: 20 })
      .withMessage("SDT không được lớn hơn 20 kí tự"),
    body("avatar")
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage("avatar phải là string url")
      .isLength({ max: 1000 })
      .withMessage("URL avatar không được lớn hơn 1000 ký tự"),
  ];
};

const updateUserRules = () => {
  return [
    body("fullname")
      .if((value: any) => value !== undefined)
      .exists({ checkFalsy: true })
      .withMessage("Họ tên không được để trống")
      .isLength({ max: 160 })
      .withMessage("Họ tên phải ít hơn 160 kí tự"),
    body("address")
      .if((value: any) => value !== undefined)
      .isLength({ max: 160 })
      .withMessage("Địa chỉ phải ít hơn 160 kí tự"),
    body("phone")
      .if((value: any) => value !== undefined)
      .isLength({ max: 20 })
      .withMessage("SDT phải ít hơn 20 kí tự"),
    body("avatar")
      .if((value: any) => value !== undefined)
      .isString()
      .withMessage("avatar phải là string url")
      .isLength({ max: 1000 })
      .withMessage("URL avatar không được lớn hơn 1000 ký tự"),
    body("password")
      .if((value: any) => value !== undefined)
      .isLength({ min: 6, max: 160 })
      .withMessage("Mật khẩu phải từ 6-160 kí tự"),
  ];
};

const updateMeRules = () => {
  return updateUserRules();
};

const changePasswordMeRules = () => {
  return [
    body("currentPassword")
      .if((value: any) => value !== undefined)
      .isLength({ min: 6, max: 160 })
      .withMessage("Mật khẩu phải từ 6-160 kí tự"),
    body("newPassword")
      .if((value: any) => value !== undefined)
      .isLength({ min: 6, max: 160 })
      .withMessage("Mật khẩu mới phải từ 6-160 kí tự"),
  ];
};

const addToWishlistRules = () => {
  return [
    body("productId")
      .exists({ checkFalsy: true })
      .withMessage("productId không được để trống")
      .isMongoId()
      .withMessage(`productId phải là id`),
  ];
};

const removeFromWishlist = () => {
  return addToWishlistRules();
};

const userMiddleware = {
  addNewUserRules,
  updateUserRules,
  updateMeRules,
  changePasswordMeRules,
  addToWishlistRules,
  removeFromWishlist,
};

export default userMiddleware;
