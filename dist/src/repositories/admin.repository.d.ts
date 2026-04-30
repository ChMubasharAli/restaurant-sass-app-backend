import { BaseRepository } from "./base.repository.js";
export declare class AdminRepository extends BaseRepository {
    findByUsername(username: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        password: string;
        role: string;
    }>;
    findById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        username: string;
    }>;
    updatePassword(id: number, hashedPassword: string): Promise<{
        id: number;
        updatedAt: Date;
        username: string;
    }>;
}
//# sourceMappingURL=admin.repository.d.ts.map