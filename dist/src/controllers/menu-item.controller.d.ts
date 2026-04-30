import type { Request, Response } from "express";
export declare class MenuItemController {
    private menuItemService;
    constructor();
    getAllMenuItems: (req: Request, res: Response) => Promise<void>;
    getMenuItemById: (req: Request, res: Response) => Promise<void>;
    createMenuItem: (req: Request, res: Response) => Promise<void>;
    updateMenuItem: (req: Request, res: Response) => Promise<void>;
    deleteMenuItem: (req: Request, res: Response) => Promise<void>;
    toggleAvailability: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=menu-item.controller.d.ts.map