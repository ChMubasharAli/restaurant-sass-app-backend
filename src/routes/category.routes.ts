import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { asyncHandler } from "../utils/async-handler";

const router = Router();
const categoryController = new CategoryController();

router.get("/", asyncHandler(categoryController.getAllCategories));
router.get("/:id", asyncHandler(categoryController.getCategoryById));
router.post("/", asyncHandler(categoryController.createCategory));
router.put("/:id", asyncHandler(categoryController.updateCategory));
router.delete("/:id", asyncHandler(categoryController.deleteCategory));

export { router as categoryRoutes };
