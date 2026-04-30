import type { CreateMenuItemDTO, UpdateMenuItemDTO } from "../dto/menu.dto.js";
export declare class MenuItemService {
    private menuItemRepository;
    constructor();
    getAllMenuItems(): Promise<({
        category: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            sortOrder: number;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        image: string | null;
        isAvailable: boolean;
        categoryId: number;
    })[]>;
    getMenuItemsByCategory(categoryId: number): Promise<({
        category: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            sortOrder: number;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        image: string | null;
        isAvailable: boolean;
        categoryId: number;
    })[]>;
    getAvailableMenuItems(): Promise<({
        category: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            sortOrder: number;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        image: string | null;
        isAvailable: boolean;
        categoryId: number;
    })[]>;
    getMenuItemById(id: number): Promise<{
        category: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            sortOrder: number;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        image: string | null;
        isAvailable: boolean;
        categoryId: number;
    }>;
    createMenuItem(data: CreateMenuItemDTO): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        image: string | null;
        isAvailable: boolean;
        categoryId: number;
    }>;
    updateMenuItem(id: number, data: UpdateMenuItemDTO): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        image: string | null;
        isAvailable: boolean;
        categoryId: number;
    }>;
    deleteMenuItem(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        image: string | null;
        isAvailable: boolean;
        categoryId: number;
    }>;
    toggleAvailability(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        image: string | null;
        isAvailable: boolean;
        categoryId: number;
    }>;
}
//# sourceMappingURL=menu-item.service.d.ts.map