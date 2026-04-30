export declare const OrderType: {
    readonly DELIVERY: "DELIVERY";
    readonly TAKEAWAY: "TAKEAWAY";
};
export type OrderType = (typeof OrderType)[keyof typeof OrderType];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly PREPARING: "PREPARING";
    readonly READY: "READY";
    readonly COMPLETED: "COMPLETED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PickupType: {
    readonly ASAP: "ASAP";
    readonly SCHEDULED: "SCHEDULED";
};
export type PickupType = (typeof PickupType)[keyof typeof PickupType];
export declare const PaymentMethod: {
    readonly COD: "COD";
    readonly ONLINE: "ONLINE";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly FAILED: "FAILED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const TransactionStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
export declare const ReservationStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
    readonly CANCELLED: "CANCELLED";
};
export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus];
//# sourceMappingURL=enums.d.ts.map