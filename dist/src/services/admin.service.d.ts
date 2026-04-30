export declare class AdminService {
    private adminRepository;
    constructor();
    private hashPassword;
    private verifyPassword;
    login(username: string, password: string): Promise<{
        id: number;
        username: string;
        message: string;
    }>;
    changePassword(id: number, currentPassword: string, newPassword: string, confirmPassword: string): Promise<{
        message: string;
        id: number;
        updatedAt: Date;
        username: string;
    }>;
    getProfile(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        username: string;
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map