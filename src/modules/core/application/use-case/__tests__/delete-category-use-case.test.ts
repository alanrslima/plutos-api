import { Category } from '../../../domain/entity/category';
import { CategoryMemoryRepository } from '../../../infra/repository/category-memory-repository';
import { DeleteCategoryUseCase } from '../delete-category-use-case';

it('should delete a category', async () => {
  const category = Category.create({ name: 'category#1', userId: '123' });
  const categoryRepository = new CategoryMemoryRepository([category]);
  const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository);
  expect(categoryRepository.data).toHaveLength(1);
  await deleteCategoryUseCase.execute({ id: category.getId() });
  expect(categoryRepository.data).toHaveLength(0);
});
