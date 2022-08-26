import { body } from "express-validator";

const addNewBannerRules = () => {
  return [
    body("bannerUrl")
      .exists({ checkFalsy: true })
      .withMessage("bannerUrl không được để trống")
      .isLength({ max: 1000 })
      .withMessage("bannerUrl phải ít hơn 1000 kí tự"),
  ];
};

const updateBannerRules = () => {
  return addNewBannerRules();
};

const bannerMiddleware = { addNewBannerRules, updateBannerRules };

export default bannerMiddleware;
