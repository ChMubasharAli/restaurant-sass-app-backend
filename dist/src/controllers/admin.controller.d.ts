import type { Request, Response } from "express";
export declare class AdminController {
    private adminService;
    constructor();
    login: (req: Request, res: Response) => Promise<void>;
    changePassword: (req: Request, res: Response) => Promise<void>;
    verifyAdmin: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=admin.controller.d.ts.map