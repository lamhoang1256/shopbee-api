import { Router } from "express";
import voucherControllers from "../controllers/voucher.controller";
import helpersMiddleware from "../middlewares/helpersMiddleware";
import tokenMiddleware from "../middlewares/tokenMiddleware";
import voucherMiddleware from "../middlewares/voucher.middleware";
const voucherRoutes = Router();

voucherRoutes.get(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  voucherMiddleware.getAllVoucherRules(),
  helpersMiddleware.entityValidator,
  voucherControllers.getAllVoucher,
);
voucherRoutes.post(
  "/save",
  tokenMiddleware.verifyToken,
  voucherMiddleware.saveVoucherRules(),
  helpersMiddleware.entityValidator,
  voucherControllers.saveVoucher,
);
voucherRoutes.get(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  voucherControllers.getSingleVoucher,
);
voucherRoutes.post(
  "/",
  tokenMiddleware.verifyTokenAndAdmin,
  voucherMiddleware.addNewVoucherRules(),
  helpersMiddleware.entityValidator,
  voucherControllers.addNewVoucher,
);
voucherRoutes.put(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  voucherMiddleware.updateVoucherRules(),
  helpersMiddleware.entityValidator,
  voucherControllers.updateVoucher,
);
voucherRoutes.delete(
  "/:id",
  helpersMiddleware.idRule("id"),
  helpersMiddleware.idValidator,
  tokenMiddleware.verifyTokenAndAdmin,
  voucherControllers.deleteVoucher,
);

export default voucherRoutes;
