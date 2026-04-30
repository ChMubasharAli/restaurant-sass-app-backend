import { BaseRepository } from "./base.repository.js";
import type { CreateOrderDTO, UpdateOrderStatusDTO } from "../dto/order.dto";
export declare class OrderRepository extends BaseRepository {
    generateOrderNumber(): Promise<string>;
    create(data: CreateOrderDTO, totalAmount: number): Promise<{
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
    findAll(filters?: any): Promise<({
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
    findById(id: number): Promise<{
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
    findByOrderNumber(orderNumber: string): Promise<{
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
    updateStatus(id: number, status: UpdateOrderStatusDTO["status"]): Promise<{
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
    updateOrderItemPrices(orderId: number, items: Array<{
        id: number;
        unitPrice: number;
        totalPrice: number;
    }>): Promise<void>;
    getOrderStats(): Promise<{
        totalOrders: number;
        ordersByStatus: (import("../../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../../generated/prisma/models.js").OrderGroupByOutputType, "status"[]> & {
            _count: number;
        })[];
        totalSales: number | import("@prisma/client-runtime-utils").Decimal;
    }>;
    updatePaymentStatus(id: number, paymentStatus: string): Promise<{
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
//# sourceMappingURL=order.repository.d.ts.map