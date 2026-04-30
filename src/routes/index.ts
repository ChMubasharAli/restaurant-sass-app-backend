import { Router } from "express";
import { restaurantRoutes } from "./restaurant.routes";
import { categoryRoutes } from "./category.routes";
import { menuItemRoutes } from "./menu-item.routes";
import { orderRoutes } from "./order.routes";
import { reservationRoutes } from "./reservation.routes";
import { dashboardRoutes } from "./dashboard.routes";
import { transactionRoutes } from "./transaction.routes";
import { paymentRoutes } from "./payment.routes";
import { adminRoutes } from "./admin.routes";

const router = Router();

router.use("/restaurant", restaurantRoutes);
router.use("/categories", categoryRoutes);
router.use("/menu-items", menuItemRoutes);
router.use("/orders", orderRoutes);
router.use("/reservations", reservationRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/transactions", transactionRoutes);
router.use("/payments", paymentRoutes);
router.use("/admin", adminRoutes);

export { router as mainRouter };
