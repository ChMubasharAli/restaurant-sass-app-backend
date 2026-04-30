import { BaseRepository } from "./base.repository.js";
export declare class RestaurantRepository extends BaseRepository {
    getSettings(): Promise<{
        name: string;
        contactNumber: string;
        address: string;
        latitude: number;
        longitude: number;
        isOpen: boolean;
        deliveryRadiusKm: number;
        authorizeNetApiLoginId: string | null;
        authorizeNetTransactionKey: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateSettings(id: number, data: any): Promise<{
        name: string;
        contactNumber: string;
        address: string;
        latitude: number;
        longitude: number;
        isOpen: boolean;
        deliveryRadiusKm: number;
        authorizeNetApiLoginId: string | null;
        authorizeNetTransactionKey: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getDeliveryRadius(): Promise<{
        latitude: number;
        longitude: number;
        deliveryRadiusKm: number;
    }>;
}
//# sourceMappingURL=restaurant.repository.d.ts.map