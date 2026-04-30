import { CategoryRepository } from "../repositories/category.repository.js";
import { NotFoundError, ConflictError } from "../utils/errors.js";
export class CategoryService {
    categoryRepository;
    constructor() {
        this.categoryRepository = new CategoryRepository();
    }
    async getAllCategories() {
        return this.categoryRepository.findAll();
    }
    async getCategoryById(id) {
        const category = await this.categoryRepository.findById(id);
        if (!category) {
            throw new NotFoundError("Category not found");
        }
        return category;
    }
    async createCategory(data) {
        return this.categoryRepository.create(data);
    }
    async updateCategory(id, data) {
        await this.getCategoryById(id);
        return this.categoryRepository.update(id, data);
    }
    async deleteCategory(id) {
        await this.getCategoryById(id);
        return this.categoryRepository.delete(id);
    }
}
//# sourceMappingURL=category.service.js.map