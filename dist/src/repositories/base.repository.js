import prisma from "../config/database.js";
export class BaseRepository {
    prisma = prisma;
    handleError(error, context) {
        console.error(`Error in ${context}:`, error);
        throw error;
    }
}
//# sourceMappingURL=base.repository.js.map