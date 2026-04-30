interface Coordinates {
    latitude: number;
    longitude: number;
}
export declare class DistanceService {
    /**
     * Calculate distance between two points using Google Maps Distance Matrix API
     * Falls back to Haversine formula if API key is not configured
     */
    calculateDistance(origin: Coordinates, destination: Coordinates): Promise<number>;
    /**
     * Calculate distance using Google Maps Distance Matrix API
     */
    private calculateWithGoogleMaps;
    /**
     * Calculate distance using Haversine formula
     * This is a fallback method for development/testing
     */
    private calculateWithHaversine;
    private toRadians;
    /**
     * Validate if delivery address is within allowed radius
     * @param customerAddress - Customer's coordinates
     * @param deliveryRadiusKm - Max delivery radius in km
     * @param restaurantCoords - Optional restaurant coordinates (from DB)
     */
    validateDeliveryRadius(customerAddress: Coordinates, deliveryRadiusKm?: number, restaurantCoords?: Coordinates): Promise<{
        isValid: boolean;
        distance: number;
        maxRadius: number;
    }>;
}
export {};
//# sourceMappingURL=distance.service.d.ts.map