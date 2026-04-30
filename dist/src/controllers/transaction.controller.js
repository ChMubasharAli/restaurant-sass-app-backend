import { TransactionService } from "../services/transaction.service.js";
export class TransactionController {
    transactionService;
    constructor() {
        this.transactionService = new TransactionService();
    }
    getAllTransactions = async (req, res) => {
        const transactions = await this.transactionService.getAllTransactions();
        res.json({
            status: "success",
            data: transactions,
        });
    };
    getTransactionByOrderId = async (req, res) => {
        const orderId = Number(req.params.orderId);
        const transaction = await this.transactionService.getTransactionByOrderId(orderId);
        res.json({
            status: "success",
            data: transaction,
        });
    };
    getTransactionsSummary = async (req, res) => {
        const summary = await this.transactionService.getTransactionsSummary();
        res.json({
            status: "success",
            data: summary,
        });
    };
}
//# sourceMappingURL=transaction.controller.js.map