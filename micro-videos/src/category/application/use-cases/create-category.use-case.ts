import CategoryRepository from "../../domain/repository/category.repository";
import { Category } from "../../domain/entities/category";

export default class CreateCategoryUseCase {
  constructor(private categoryRepo: CategoryRepository.Repository) {}

  async execute(input: Input): Promise<Output> {
    const entity = new Category(input);
    const id = entity.id;
    await this.categoryRepo.insert(entity);
    return {
        id: id,
        name: entity.name,
        description: entity.description,
        is_active: entity.is_active,
        created_at: entity.created_at,
    }
  }
}

export type Input = {
  name: string;
  description?: string;
  is_active?: boolean;
};

export type Output = {
  id: string;
  name: string;
  description: string | null;
  is_active: boolean;
  created_at: Date;
};
