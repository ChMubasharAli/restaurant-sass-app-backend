import { z } from "zod";
export declare const updateRestaurantSettingsSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    contactNumber: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    latitude: z.ZodOptional<z.ZodNumber>;
    longitude: z.ZodOptional<z.ZodNumber>;
    isOpen: z.ZodOptional<z.ZodBoolean>;
    deliveryRadiusKm: z.ZodOptional<z.ZodNumber>;
    authorizeNetApiLoginId: z.ZodOptional<z.ZodString>;
    authorizeNetTransactionKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateRestaurantSettingsInput = z.infer<typeof updateRestaurantSettingsSchema>;
//# sourceMappingURL=restaurant.validator.d.ts.map