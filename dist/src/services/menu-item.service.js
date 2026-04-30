import { MenuItemRepository } from "../repositories/menu-item.repository.js";
import { NotFoundError, ValidationError } from "../utils/errors.js";
export class MenuItemService {
    menuItemRepository;
    constructor() {
        this.menuItemRepository = new MenuItemRepository();
    }
    async getAllMenuItems() {
        return this.menuItemRepository.findAll();
    }
    async getMenuItemsByCategory(categoryId) {
        return this.menuItemRepository.findByCategory(categoryId);
    }
    async getAvailableMenuItems() {
        return this.menuItemRepository.findAvailable();
    }
    async getMenuItemById(id) {
        const menuItem = await this.menuItemRepository.findById(id);
        if (!menuItem) {
            throw new NotFoundError("Menu item not found");
        }
        return menuItem;
    }
    async createMenuItem(data) {
        return this.menuItemRepository.create(data);
    }
    async updateMenuItem(id, data) {
        await this.getMenuItemById(id);
        return this.menuItemRepository.update(id, data);
    }
    async deleteMenuItem(id) {
        await this.getMenuItemById(id);
        return this.menuItemRepository.delete(id);
    }
    async toggleAvailability(id) {
        const menuItem = await this.getMenuItemById(id);
        return this.menuItemRepository.update(id, {
            isAvailable: !menuItem.isAvailable,
        });
    }
}
//# sourceMappingURL=menu-item.service.js.map