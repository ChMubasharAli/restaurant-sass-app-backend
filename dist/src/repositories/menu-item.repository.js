import { BaseRepository } from "./base.repository.js";
export class MenuItemRepository extends BaseRepository {
    async findAll() {
        try {
            return await this.prisma.menuItem.findMany({
                include: {
                    category: true,
                },
                orderBy: {
                    name: "asc",
                },
            });
        }
        catch (error) {
            this.handleError(error, "MenuItemRepository.findAll");
        }
    }
    async findByCategory(categoryId) {
        try {
            return await this.prisma.menuItem.findMany({
                where: { categoryId },
                include: {
                    category: true,
                },
                orderBy: {
                    name: "asc",
                },
            });
        }
        catch (error) {
            this.handleError(error, "MenuItemRepository.findByCategory");
        }
    }
    async findAvailable() {
        try {
            return await this.prisma.menuItem.findMany({
                where: { isAvailable: true },
                include: {
                    category: true,
                },
                orderBy: {
                    name: "asc",
                },
            });
        }
        catch (error) {
            this.handleError(error, "MenuItemRepository.findAvailable");
        }
    }
    async findById(id) {
        try {
            return await this.prisma.menuItem.findUnique({
                where: { id },
                include: {
                    category: true,
                },
            });
        }
        catch (error) {
            this.handleError(error, "MenuItemRepository.findById");
        }
    }
    async create(data) {
        try {
            return await this.prisma.menuItem.create({ data });
        }
        catch (error) {
            this.handleError(error, "MenuItemRepository.create");
        }
    }
    async update(id, data) {
        try {
            return await this.prisma.menuItem.update({
                where: { id },
                data,
            });
        }
        catch (error) {
            this.handleError(error, "MenuItemRepository.update");
        }
    }
    async delete(id) {
        try {
            return await this.prisma.menuItem.delete({
                where: { id },
            });
        }
        catch (error) {
            this.handleError(error, "MenuItemRepository.delete");
        }
    }
}
//# sourceMappingURL=menu-item.repository.js.map