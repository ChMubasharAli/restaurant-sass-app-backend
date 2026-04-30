import type { Request, Response } from "express";
export declare class DashboardController {
    private dashboardService;
    constructor();
    getDashboardStats: (req: Request, res: Response) => Promise<void>;
    getSalesReport: (req: Request, res: Response) => Promise<void>;
    getOrderAnalytics: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=dashboard.controller.d.ts.map