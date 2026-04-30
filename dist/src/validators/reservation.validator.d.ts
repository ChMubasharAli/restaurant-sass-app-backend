import { z } from "zod";
export declare const createReservationSchema: z.ZodObject<{
    reservationDate: z.ZodString;
    timeSlot: z.ZodString;
    numberOfGuests: z.ZodNumber;
    customerName: z.ZodString;
    phoneNumber: z.ZodString;
    specialRequest: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateReservationStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        PENDING: "PENDING";
        CANCELLED: "CANCELLED";
        ACCEPTED: "ACCEPTED";
        REJECTED: "REJECTED";
    }>;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateReservationInput = z.infer<typeof createReservationSchema>;
export type UpdateReservationStatusInput = z.infer<typeof updateReservationStatusSchema>;
//# sourceMappingURL=reservation.validator.d.ts.map