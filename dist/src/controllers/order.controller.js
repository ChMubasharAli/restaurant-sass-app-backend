import { OrderService } from "../services/order.service.js";
import { DistanceService } from "../services/distance.service.js";
import { RestaurantService } from "../services/restaurant.service.js";
import { createOrderSchema, updateOrderStatusSchema, } from "../validators/order.validator.js";
import { ValidationError } from "../utils/errors.js";
export class OrderController {
    orderService;
    distanceService;
    restaurantService;
    constructor() {
        this.orderService = new OrderService();
        this.distanceService = new DistanceService();
        this.restaurantService = new RestaurantService();
    }
    createOrder = async (req, res) => {
        const validationResult = createOrderSchema.safeParse(req.body);
        if (!validationResult.success) {
            throw new ValidationError(validationResult.error.issues[0]?.message || "Validation failed");
        }
        const orderData = validationResult.data;
        // If delivery order, validate delivery radius
        if (orderData.orderType === "DELIVERY") {
            if (!orderData.deliveryAddress) {
                throw new ValidationError("Delivery address is required for delivery orders");
            }
            // Get FULL restaurant settings from database
            const settings = await this.restaurantService.getSettings();
            // Customer coordinates from request body
            const customerCoordinates = {
                latitude: req.body.deliveryLatitude || 0,
                longitude: req.body.deliveryLongitude || 0,
            };
            console.log("📍 OrderController - createOrder (Delivery):");
            console.log("  Restaurant (DB):", settings.latitude, ",", settings.longitude);
            console.log("  Customer:", customerCoordinates.latitude, ",", customerCoordinates.longitude);
            // Validate delivery radius with restaurant coordinates from database
            const validation = await this.distanceService.validateDeliveryRadius(customerCoordinates, settings.deliveryRadiusKm, {
                latitude: settings.latitude,
                longitude: settings.longitude,
            });
            if (!validation.isValid) {
                return res.status(400).json({
                    status: "error",
                    message: `We do not deliver to this location. Distance: ${validation.distance}km exceeds maximum delivery radius of ${validation.maxRadius}km.`,
                });
            }
        }
        // Create the order
        const order = await this.orderService.createOrder(orderData);
        console.log("✅ Order Created:", order?.orderNumber);
        res.status(201).json({
            status: "success",
            message: "Your order has been placed successfully.",
            data: {
                id: order?.id,
                orderNumber: order?.orderNumber,
                orderSummary: {
                    items: order?.orderItems.map((item) => ({
                        name: item.menuItem.name,
                        quantity: item.quantity,
                        price: item.unitPrice,
                        total: item.totalPrice,
                    })),
                    totalAmount: order?.totalAmount,
                    orderType: order?.orderType,
                    paymentMethod: order?.paymentMethod,
                },
            },
        });
    };
    getAllOrders = async (req, res) => {
        const { status, orderType, paymentMethod, startDate, endDate } = req.query;
        const filters = {};
        if (status) {
            filters.status = status;
        }
        if (orderType) {
            filters.orderType = orderType;
        }
        if (paymentMethod) {
            filters.paymentMethod = paymentMethod;
        }
        if (startDate || endDate) {
            filters.createdAt = {};
            if (startDate) {
                filters.createdAt.gte = new Date(startDate);
            }
            if (endDate) {
                filters.createdAt.lte = new Date(endDate);
            }
        }
        const orders = await this.orderService.getAllOrders(filters);
        res.json({
            status: "success",
            data: orders,
        });
    };
    getOrderById = async (req, res) => {
        const id = Number(req.params.id);
        const order = await this.orderService.getOrderById(id);
        res.json({
            status: "success",
            data: order,
        });
    };
    getOrderByNumber = async (req, res) => {
        const { orderNumber } = req.params;
        const order = await this.orderService.getOrderByNumber(orderNumber);
        res.json({
            status: "success",
            data: order,
        });
    };
    updateOrderStatus = async (req, res) => {
        const id = Number(req.params.id);
        const validationResult = updateOrderStatusSchema.safeParse(req.body);
        if (!validationResult.success) {
            throw new ValidationError(validationResult.error.issues[0]?.message || "Validation failed");
        }
        const order = await this.orderService.updateOrderStatus(id, validationResult.data.status);
        res.json({
            status: "success",
            message: `Order status updated to ${validationResult.data.status}`,
            data: order,
        });
    };
    getOrderStats = async (req, res) => {
        const stats = await this.orderService.getOrderStats();
        res.json({
            status: "success",
            data: stats,
        });
    };
    cancelOrder = async (req, res) => {
        const id = Number(req.params.id);
        const order = await this.orderService.cancelOrder(id);
        res.json({
            status: "success",
            message: "Order cancelled successfully",
            data: order,
        });
    };
}
//# sourceMappingURL=order.controller.js.map