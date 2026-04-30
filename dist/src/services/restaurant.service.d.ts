import type { UpdateRestaurantSettingsInput } from "../validators/restaurant.validator.js";
export declare class RestaurantService {
    private restaurantRepository;
    constructor();
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
    updateSettings(data: UpdateRestaurantSettingsInput): Promise<{
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
//# sourceMappingURL=restaurant.service.d.ts.map