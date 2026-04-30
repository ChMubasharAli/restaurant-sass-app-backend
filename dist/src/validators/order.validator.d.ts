import { z } from "zod";
export declare const createOrderSchema: z.ZodObject<{
    orderType: z.ZodEnum<{
        DELIVERY: "DELIVERY";
        TAKEAWAY: "TAKEAWAY";
    }>;
    customerName: z.ZodString;
    phoneNumber: z.ZodString;
    deliveryAddress: z.ZodOptional<z.ZodString>;
    deliveryNotes: z.ZodOptional<z.ZodString>;
    deliveryLatitude: z.ZodOptional<z.ZodNumber>;
    deliveryLongitude: z.ZodOptional<z.ZodNumber>;
    pickupTime: z.ZodOptional<z.ZodString>;
    pickupType: z.ZodOptional<z.ZodEnum<{
        ASAP: "ASAP";
        SCHEDULED: "SCHEDULED";
    }>>;
    paymentMethod: z.ZodEnum<{
        COD: "COD";
        ONLINE: "ONLINE";
    }>;
    items: z.ZodArray<z.ZodObject<{
        menuItemId: z.ZodNumber;
        quantity: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const updateOrderStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        PENDING: "PENDING";
        PREPARING: "PREPARING";
        READY: "READY";
        COMPLETED: "COMPLETED";
    }>;
}, z.core.$strip>;
export type CreateOrderInput = z.infer<typeof createOrderSchema>;
export type UpdateOrderStatusInput = z.infer<typeof updateOrderStatusSchema>;
//# sourceMappingURL=order.validator.d.ts.map