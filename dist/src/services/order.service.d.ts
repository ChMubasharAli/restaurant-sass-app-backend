import type { CreateOrderDTO } from "../dto/order.dto.js";
export declare class OrderService {
    private orderRepository;
    private menuItemRepository;
    private restaurantRepository;
    constructor();
    createOrder(data: CreateOrderDTO): Promise<{
        orderItems: ({
            menuItem: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                description: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                image: string | null;
                isAvailable: boolean;
                categoryId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalPrice: import("@prisma/client-runtime-utils").Decimal;
            menuItemId: number;
            orderId: number;
        })[];
        transaction: {
            id: number;
            createdAt: Date;
            status: import("../../generated/prisma/enums.js").TransactionStatus;
            paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
            orderId: number;
            transactionId: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
        status: import("../../generated/prisma/enums.js").OrderStatus;
        customerName: string;
        phoneNumber: string;
        deliveryAddress: string | null;
        deliveryNotes: string | null;
        pickupTime: Date | null;
        pickupType: import("../../generated/prisma/enums.js").PickupType | null;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }>;
    getAllOrders(filters?: any): Promise<({
        orderItems: ({
            menuItem: {
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
            };
        } & {
            id: number;
            createdAt: Date;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalPrice: import("@prisma/client-runtime-utils").Decimal;
            menuItemId: number;
            orderId: number;
        })[];
        transaction: {
            id: number;
            createdAt: Date;
            status: import("../../generated/prisma/enums.js").TransactionStatus;
            paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
            orderId: number;
            transactionId: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
        status: import("../../generated/prisma/enums.js").OrderStatus;
        customerName: string;
        phoneNumber: string;
        deliveryAddress: string | null;
        deliveryNotes: string | null;
        pickupTime: Date | null;
        pickupType: import("../../generated/prisma/enums.js").PickupType | null;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    getOrderById(id: number): Promise<{
        orderItems: ({
            menuItem: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                description: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                image: string | null;
                isAvailable: boolean;
                categoryId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalPrice: import("@prisma/client-runtime-utils").Decimal;
            menuItemId: number;
            orderId: number;
        })[];
        transaction: {
            id: number;
            createdAt: Date;
            status: import("../../generated/prisma/enums.js").TransactionStatus;
            paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
            orderId: number;
            transactionId: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
        status: import("../../generated/prisma/enums.js").OrderStatus;
        customerName: string;
        phoneNumber: string;
        deliveryAddress: string | null;
        deliveryNotes: string | null;
        pickupTime: Date | null;
        pickupType: import("../../generated/prisma/enums.js").PickupType | null;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }>;
    getOrderByNumber(orderNumber: string): Promise<{
        orderItems: ({
            menuItem: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                description: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                image: string | null;
                isAvailable: boolean;
                categoryId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalPrice: import("@prisma/client-runtime-utils").Decimal;
            menuItemId: number;
            orderId: number;
        })[];
        transaction: {
            id: number;
            createdAt: Date;
            status: import("../../generated/prisma/enums.js").TransactionStatus;
            paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
            orderId: number;
            transactionId: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
        status: import("../../generated/prisma/enums.js").OrderStatus;
        customerName: string;
        phoneNumber: string;
        deliveryAddress: string | null;
        deliveryNotes: string | null;
        pickupTime: Date | null;
        pickupType: import("../../generated/prisma/enums.js").PickupType | null;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }>;
    updateOrderStatus(id: number, status: string): Promise<{
        orderItems: ({
            menuItem: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                description: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                image: string | null;
                isAvailable: boolean;
                categoryId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalPrice: import("@prisma/client-runtime-utils").Decimal;
            menuItemId: number;
            orderId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
        status: import("../../generated/prisma/enums.js").OrderStatus;
        customerName: string;
        phoneNumber: string;
        deliveryAddress: string | null;
        deliveryNotes: string | null;
        pickupTime: Date | null;
        pickupType: import("../../generated/prisma/enums.js").PickupType | null;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }>;
    updateOrderPaymentStatus(id: number, paymentStatus: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
        status: import("../../generated/prisma/enums.js").OrderStatus;
        customerName: string;
        phoneNumber: string;
        deliveryAddress: string | null;
        deliveryNotes: string | null;
        pickupTime: Date | null;
        pickupType: import("../../generated/prisma/enums.js").PickupType | null;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }>;
    getOrderStats(): Promise<{
        totalOrders: number;
        ordersByStatus: (import("../../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../../generated/prisma/models.js").OrderGroupByOutputType, "status"[]> & {
            _count: number;
        })[];
        totalSales: number | import("@prisma/client-runtime-utils").Decimal;
    }>;
    cancelOrder(id: number): Promise<{
        orderItems: ({
            menuItem: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                description: string;
                price: import("@prisma/client-runtime-utils").Decimal;
                image: string | null;
                isAvailable: boolean;
                categoryId: number;
            };
        } & {
            id: number;
            createdAt: Date;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalPrice: import("@prisma/client-runtime-utils").Decimal;
            menuItemId: number;
            orderId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        orderNumber: string;
        orderType: import("../../generated/prisma/enums.js").OrderType;
        status: import("../../generated/prisma/enums.js").OrderStatus;
        customerName: string;
        phoneNumber: string;
        deliveryAddress: string | null;
        deliveryNotes: string | null;
        pickupTime: Date | null;
        pickupType: import("../../generated/prisma/enums.js").PickupType | null;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        paymentStatus: import("../../generated/prisma/enums.js").PaymentStatus;
        totalAmount: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
//# sourceMappingURL=order.service.d.ts.map