import type { Request, Response } from "express";
type CategoryParams = {
    id: string;
};
export declare class CategoryController {
    private categoryService;
    constructor();
    private parseId;
    getAllCategories: (req: Request, res: Response) => Promise<void>;
    getCategoryById: (req: Request<CategoryParams>, res: Response) => Promise<void>;
    createCategory: (req: Request, res: Response) => Promise<void>;
    updateCategory: (req: Request<CategoryParams>, res: Response) => Promise<void>;
    deleteCategory: (req: Request<CategoryParams>, res: Response) => Promise<void>;
}
export {};
//# sourceMappingURL=category.controller.d.ts.map