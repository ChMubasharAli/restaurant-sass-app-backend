import { TransactionRepository } from "../repositories/transaction.repository.js";
export class TransactionService {
    transactionRepository;
    constructor() {
        this.transactionRepository = new TransactionRepository();
    }
    async getAllTransactions() {
        return this.transactionRepository.findAll();
    }
    async getTransactionByOrderId(orderId) {
        return this.transactionRepository.findByOrderId(orderId);
    }
    async getTransactionsSummary() {
        return this.transactionRepository.getTransactionsSummary();
    }
    async createTransaction(data) {
        return this.transactionRepository.create(data);
    }
}
//# sourceMappingURL=transaction.service.js.map