import type { Request, Response } from "express";
export declare class TransactionController {
    private transactionService;
    constructor();
    getAllTransactions: (req: Request, res: Response) => Promise<void>;
    getTransactionByOrderId: (req: Request, res: Response) => Promise<void>;
    getTransactionsSummary: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=transaction.controller.d.ts.map