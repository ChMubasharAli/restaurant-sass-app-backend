import { z } from "zod";
export const createCategorySchema = z.object({
    name: z.string().min(1, "Category name is required"),
    description: z.string().optional(),
    sortOrder: z.number().int().min(0).optional(),
});
export const updateCategorySchema = z.object({
    name: z.string().min(1).optional(),
    description: z.string().optional(),
    sortOrder: z.number().int().min(0).optional(),
});
export const createMenuItemSchema = z.object({
    name: z.string().min(1, "Item name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().positive("Price must be positive"),
    image: z.string().url().optional(),
    isAvailable: z.boolean().optional(),
    categoryId: z.number().int().positive("Category ID is required"),
});
export const updateMenuItemSchema = z.object({
    name: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    price: z.number().positive().optional(),
    image: z.string().url().optional(),
    isAvailable: z.boolean().optional(),
    categoryId: z.number().int().positive().optional(),
});
//# sourceMappingURL=menu.validator.js.map