import { body, query } from "express-validator";

const addNewVoucherRules = () => {
  return [
    body("code")
      .exists({ checkFalsy: true })
      .withMessage("Voucher code không được để trống")
      .isLength({ min: 6, max: 20 })
      .withMessage("Voucher code phải từ 6-20 kí tự"),
    body("value")
      .if((value: any) => value !== undefined)
      .isNumeric()
      .withMessage("Value phải ở định dạng number"),
    body("title")
      .if((value: any) => value !== undefined)
      .isLength({ max: 200 })
      .withMessage("Title phải ít hơn 200 kí tự"),
  ];
};

const getAllVoucherRules = () => {
  return [
    query("limit")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("limit phải ở định dạng number"),
    query("page")
      .if((value: any) => value !== undefined)
      .isInt()
      .withMessage("page phải ở định dạng number"),
  ];
};

const saveVoucherRules = () => {
  return [query("code").exists({ checkFalsy: true }).withMessage("Không tìm thấy voucher code")];
};

const updateVoucherRules = () => {
  return addNewVoucherRules();
};

const voucherMiddleware = {
  addNewVoucherRules,
  saveVoucherRules,
  updateVoucherRules,
  getAllVoucherRules,
};

export default voucherMiddleware;
