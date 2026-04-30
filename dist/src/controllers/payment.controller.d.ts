import type { Request, Response } from "express";
export declare class PaymentController {
    private paymentService;
    private orderService;
    constructor();
    /**
     * Process credit card payment
     * POST /api/payments/process
     */
    processPayment: (req: Request, res: Response) => Promise<void>;
    /**
     * Process payment with Accept.js opaque data (PCI-compliant)
     * POST /api/payments/process-opaque
     */
    processOpaquePayment: (req: Request, res: Response) => Promise<void>;
    /**
     * Handle Cash on Delivery orders
     * POST /api/payments/cod
     */
    processCOD: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=payment.controller.d.ts.map