import { Router } from "express";
import { PaymentController } from "../controllers/payment.controller";
import { asyncHandler } from "../utils/async-handler";

const router = Router();
const paymentController = new PaymentController();

// Online payment routes
router.post("/process", asyncHandler(paymentController.processPayment));
router.post(
  "/process-opaque",
  asyncHandler(paymentController.processOpaquePayment),
);

// Cash on Delivery
router.post("/cod", asyncHandler(paymentController.processCOD));

export { router as paymentRoutes };
