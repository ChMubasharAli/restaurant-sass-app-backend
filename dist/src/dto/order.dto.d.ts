export interface CreateOrderDTO {
    orderType: "DELIVERY" | "TAKEAWAY";
    customerName: string;
    phoneNumber: string;
    deliveryAddress?: string;
    deliveryNotes?: string;
    pickupTime?: string;
    pickupType?: "ASAP" | "SCHEDULED";
    paymentMethod: "COD" | "ONLINE";
    items: OrderItemDTO[];
}
export interface OrderItemDTO {
    menuItemId: number;
    quantity: number;
}
export interface UpdateOrderStatusDTO {
    status: "PENDING" | "PREPARING" | "READY" | "COMPLETED" | "CANCELLED";
}
//# sourceMappingURL=order.dto.d.ts.map