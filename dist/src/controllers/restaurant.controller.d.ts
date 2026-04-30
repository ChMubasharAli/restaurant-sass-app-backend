import type { Request, Response } from "express";
export declare class RestaurantController {
    private restaurantService;
    constructor();
    getSettings: (req: Request, res: Response) => Promise<void>;
    updateSettings: (req: Request, res: Response) => Promise<void>;
    getDeliveryRadius: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=restaurant.controller.d.ts.map