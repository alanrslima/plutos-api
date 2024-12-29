import { Category } from "../../domain/entity/category";
import { CategoryRepository } from "../contract/repository/category-repository";
import { UseCase } from "../contract/use-case";

export class CreateCategoryUseCase implements UseCase<Input, Output> {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(input: Input): Promise<void> {
    const category = Category.create({
      name: input.name,
      userId: input.userId,
    });
    await this.categoryRepository.create(category);
  }
}

type Input = {
  name: string;
  userId: string;
};

type Output = void;
