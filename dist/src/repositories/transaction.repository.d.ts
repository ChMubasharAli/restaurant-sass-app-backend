import { BaseRepository } from "./base.repository.js";
export declare class TransactionRepository extends BaseRepository {
    create(data: {
        orderId: number;
        paymentMethod: string;
        amount: number;
        status: string;
        transactionId?: string;
        gatewayResponse?: any;
    }): Promise<{
        id: number;
        createdAt: Date;
        status: import("../../generated/prisma/enums.js").TransactionStatus;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        orderId: number;
        transactionId: string | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    findAll(): Promise<({
        order: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        status: import("../../generated/prisma/enums.js").TransactionStatus;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        orderId: number;
        transactionId: string | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
    })[]>;
    findByOrderId(orderId: number): Promise<{
        order: {
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
        };
    } & {
        id: number;
        createdAt: Date;
        status: import("../../generated/prisma/enums.js").TransactionStatus;
        paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
        orderId: number;
        transactionId: string | null;
        amount: import("@prisma/client-runtime-utils").Decimal;
        gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    getTransactionsSummary(): Promise<{
        transactions: ({
            order: {
                orderNumber: string;
                customerName: string;
            };
        } & {
            id: number;
            createdAt: Date;
            status: import("../../generated/prisma/enums.js").TransactionStatus;
            paymentMethod: import("../../generated/prisma/enums.js").PaymentMethod;
            orderId: number;
            transactionId: string | null;
            amount: import("@prisma/client-runtime-utils").Decimal;
            gatewayResponse: import("@prisma/client/runtime/client").JsonValue | null;
        })[];
        summary: {
            totalTransactions: number;
            totalAmount: number | import("@prisma/client-runtime-utils").Decimal;
            completedTransactions: number;
            failedTransactions: number;
        };
    }>;
}
//# sourceMappingURL=transaction.repository.d.ts.map