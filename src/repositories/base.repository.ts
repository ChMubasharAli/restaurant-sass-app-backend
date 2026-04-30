import prisma from "../config/database";

export class BaseRepository {
  protected prisma = prisma;

  protected handleError(error: any, context: string): never {
    console.error(`Error in ${context}:`, error);
    throw error;
  }
}
