export declare class DashboardService {
    private orderRepository;
    private reservationRepository;
    private restaurantRepository;
    constructor();
    getDashboardStats(): Promise<{
        overview: {
            totalOrders: number;
            todayOrders: any;
            totalReservations: number;
            todayReservations: any;
            totalSales: number | import("@prisma/client-runtime-utils").Decimal;
            todayRevenue: any;
            restaurantStatus: string;
            deliveryRadius: number;
        };
        ordersByStatus: (import("../../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../../generated/prisma/models.js").OrderGroupByOutputType, "status"[]> & {
            _count: number;
        })[];
        ordersByType: any;
        paymentsByMethod: any;
        reservationStats: (import("../../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../../generated/prisma/models.js").ReservationGroupByOutputType, "status"[]> & {
            _count: number;
        })[];
        recentOrders: any;
        recentReservations: any;
    }>;
    getSalesReport(startDate?: string, endDate?: string): Promise<{
        totalTransactions: any;
        totalSales: any;
        averageOrderValue: number;
        sales: any;
    }>;
    getOrderAnalytics(days?: number): Promise<unknown[]>;
}
//# sourceMappingURL=dashboard.service.d.ts.map