import { DashboardService } from "../services/dashboard.service.js";
export class DashboardController {
    dashboardService;
    constructor() {
        this.dashboardService = new DashboardService();
    }
    getDashboardStats = async (req, res) => {
        const stats = await this.dashboardService.getDashboardStats();
        res.json({
            status: "success",
            data: stats,
        });
    };
    getSalesReport = async (req, res) => {
        const { startDate, endDate } = req.query;
        const report = await this.dashboardService.getSalesReport(startDate, endDate);
        res.json({
            status: "success",
            data: report,
        });
    };
    getOrderAnalytics = async (req, res) => {
        const days = parseInt(req.query.days) || 30;
        const analytics = await this.dashboardService.getOrderAnalytics(days);
        res.json({
            status: "success",
            data: analytics,
        });
    };
}
//# sourceMappingURL=dashboard.controller.js.map