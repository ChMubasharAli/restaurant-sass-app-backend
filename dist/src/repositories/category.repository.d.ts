import type { CreateCategoryDTO, UpdateCategoryDTO } from "../dto/menu.dto";
import { BaseRepository } from "./base.repository.js";
export declare class CategoryRepository extends BaseRepository {
    findAll(): Promise<({
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
    findById(id: number): Promise<{
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
    create(data: CreateCategoryDTO): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sortOrder: number;
    }>;
    update(id: number, data: UpdateCategoryDTO): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sortOrder: number;
    }>;
    delete(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        sortOrder: number;
    }>;
}
//# sourceMappingURL=category.repository.d.ts.map