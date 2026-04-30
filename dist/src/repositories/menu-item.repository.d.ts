import type { CreateMenuItemDTO, UpdateMenuItemDTO } from "../dto/menu.dto";
import { BaseRepository } from "./base.repository.js";
export declare class MenuItemRepository extends BaseRepository {
    findAll(): Promise<({
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
    findByCategory(categoryId: number): Promise<({
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
    findAvailable(): Promise<({
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
    findById(id: number): Promise<{
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
    create(data: CreateMenuItemDTO): Promise<{
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
    update(id: number, data: UpdateMenuItemDTO): Promise<{
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
    delete(id: number): Promise<{
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
//# sourceMappingURL=menu-item.repository.d.ts.map