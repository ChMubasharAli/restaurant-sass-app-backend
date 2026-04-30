import type { Request, Response } from "express";
export declare class OrderController {
    private orderService;
    private distanceService;
    private restaurantService;
    constructor();
    createOrder: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllOrders: (req: Request, res: Response) => Promise<void>;
    getOrderById: (req: Request, res: Response) => Promise<void>;
    getOrderByNumber: (req: Request, res: Response) => Promise<void>;
    updateOrderStatus: (req: Request, res: Response) => Promise<void>;
    getOrderStats: (req: Request, res: Response) => Promise<void>;
    cancelOrder: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=order.controller.d.ts.map