import { CategoryService } from "../services/category.service.js";
import { createCategorySchema, updateCategorySchema, } from "../validators/menu.validator.js";
import { ValidationError } from "../utils/errors.js";
export class CategoryController {
    categoryService;
    constructor() {
        this.categoryService = new CategoryService();
    }
    // ---------------- Helper ----------------
    parseId(id) {
        const parsedId = Number(id);
        if (isNaN(parsedId)) {
            throw new ValidationError("Invalid category id");
        }
        return parsedId;
    }
    // ---------------- Get All Categories ----------------
    getAllCategories = async (req, res) => {
        const categories = await this.categoryService.getAllCategories();
        res.json({
            status: "success",
            data: categories,
        });
    };
    // ---------------- Get Single Category ----------------
    getCategoryById = async (req, res) => {
        const id = this.parseId(req.params.id);
        const category = await this.categoryService.getCategoryById(id);
        res.json({
            status: "success",
            data: category,
        });
    };
    // ---------------- Create Category ----------------
    createCategory = async (req, res) => {
        const validationResult = createCategorySchema.safeParse(req.body);
        if (!validationResult.success) {
            throw new ValidationError(validationResult.error.issues[0]?.message);
        }
        const category = await this.categoryService.createCategory(validationResult.data);
        res.status(201).json({
            status: "success",
            data: category,
        });
    };
    // ---------------- Update Category ----------------
    updateCategory = async (req, res) => {
        const id = this.parseId(req.params.id);
        const validationResult = updateCategorySchema.safeParse(req.body);
        if (!validationResult.success) {
            throw new ValidationError(validationResult.error.issues[0]?.message);
        }
        const category = await this.categoryService.updateCategory(id, validationResult.data);
        res.json({
            status: "success",
            data: category,
        });
    };
    // ---------------- Delete Category ----------------
    deleteCategory = async (req, res) => {
        const id = this.parseId(req.params.id);
        await this.categoryService.deleteCategory(id);
        res.json({
            status: "success",
            message: "Category deleted successfully",
        });
    };
}
//# sourceMappingURL=category.controller.js.map