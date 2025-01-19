import { CategoryRepository } from '../contract/repository/category-repository';
import { UseCase } from '../contract/use-case';

export class DeleteCategoryUseCase implements UseCase<Input, Output> {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(input: Input): Promise<void> {
    const category = await this.categoryRepository.getById(input.id);
    await this.categoryRepository.deleteById(category.getId());
  }
}

export type Input = {
  id: string;
};

export type Output = void;
