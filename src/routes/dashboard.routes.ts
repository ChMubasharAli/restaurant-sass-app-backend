import { Router } from "express";
import { DashboardController } from "../controllers/dashboard.controller";
import { asyncHandler } from "../utils/async-handler";

const router = Router();
const dashboardController = new DashboardController();

router.get("/stats", asyncHandler(dashboardController.getDashboardStats));
router.get("/sales", asyncHandler(dashboardController.getSalesReport));
router.get("/analytics", asyncHandler(dashboardController.getOrderAnalytics));

export { router as dashboardRoutes };
