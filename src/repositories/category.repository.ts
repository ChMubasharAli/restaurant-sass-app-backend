import type { CreateCategoryDTO, UpdateCategoryDTO } from "../dto/menu.dto";
import { BaseRepository } from "./base.repository";

export class CategoryRepository extends BaseRepository {
  async findAll() {
    try {
      return await this.prisma.category.findMany({
        include: {
          _count: {
            select: { menuItems: true },
          },
        },
        orderBy: { sortOrder: "asc" },
      });
    } catch (error) {
      this.handleError(error, "CategoryRepository.findAll");
    }
  }

  async findById(id: number) {
    try {
      return await this.prisma.category.findUnique({
        where: { id },
        include: {
          menuItems: true,
        },
      });
    } catch (error) {
      this.handleError(error, "CategoryRepository.findById");
    }
  }

  async create(data: CreateCategoryDTO) {
    try {
      return await this.prisma.category.create({ data });
    } catch (error) {
      this.handleError(error, "CategoryRepository.create");
    }
  }

  async update(id: number, data: UpdateCategoryDTO) {
    try {
      return await this.prisma.category.update({
        where: { id },
        data,
      });
    } catch (error) {
      this.handleError(error, "CategoryRepository.update");
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.category.delete({
        where: { id },
      });
    } catch (error) {
      this.handleError(error, "CategoryRepository.delete");
    }
  }
}
