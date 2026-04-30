export declare class PaymentService {
    private transactionService;
    constructor();
    /**
     * Process credit card payment
     */
    processCreditCardPayment(params: {
        amount: number;
        cardNumber: string;
        expirationDate: string;
        cardCode: string;
        customerName: string;
        customerEmail?: string;
        address?: string;
        city?: string;
        state?: string;
        zip?: string;
        orderId: number;
    }): Promise<{
        success: boolean;
        transactionId?: string;
        message: string;
        response?: any;
    }>;
    /**
     * Process payment with Accept.js opaque data (PCI-compliant)
     * This method was missing and causing the error
     */
    processPaymentWithOpaqueData(params: {
        amount: number;
        opaqueDataDescriptor: string;
        opaqueDataValue: string;
        customerName: string;
        customerEmail?: string;
        orderId: number;
    }): Promise<{
        success: boolean;
        transactionId?: string;
        message: string;
    }>;
}
//# sourceMappingURL=payment.service.d.ts.map