import { Router } from "express";
import voucherControllers from "../controllers/voucher.controller";
import tokenMiddleware from "../middlewares/tokenMiddleware";
const voucherRoutes = Router();

voucherRoutes.get("/", tokenMiddleware.verifyTokenAndAdmin, voucherControllers.getAllVoucher);
voucherRoutes.get("/apply", tokenMiddleware.verifyToken, voucherControllers.saveVoucher);
voucherRoutes.get("/:id", voucherControllers.getSingleVoucher);
voucherRoutes.post("/", tokenMiddleware.verifyTokenAndAdmin, voucherControllers.addNewVoucher);
voucherRoutes.put("/:id", tokenMiddleware.verifyTokenAndAdmin, voucherControllers.updateVoucher);
voucherRoutes.delete("/:id", tokenMiddleware.verifyTokenAndAdmin, voucherControllers.deleteVoucher);

export default voucherRoutes;
