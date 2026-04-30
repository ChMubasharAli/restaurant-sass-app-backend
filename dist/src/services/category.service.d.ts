import type { CreateCategoryDTO, UpdateCategoryDTO } from "../dto/menu.dto.js";
export declare class CategoryService {
    private categoryRepository;
    constructor();
    getAllCategories(): Promise<({
        _count: {
            menuItems: number;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sortOrder: number;
    })[]>;
    getCategoryById(id: number): Promise<{
        menuItems: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            image: string | null;
            isAvailable: boolean;
            categoryId: number;
        }[];
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sortOrder: number;
    }>;
    createCategory(data: CreateCategoryDTO): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sortOrder: number;
    }>;
    updateCategory(id: number, data: UpdateCategoryDTO): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sortOrder: number;
    }>;
    deleteCategory(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sortOrder: number;
    }>;
}
//# sourceMappingURL=category.service.d.ts.map