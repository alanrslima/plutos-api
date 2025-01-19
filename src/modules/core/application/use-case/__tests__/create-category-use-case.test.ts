import { CategoryMemoryRepository } from '../../../infra/repository/category-memory-repository';
import { CreateCategoryUseCase } from '../create-category-use-case';

it('should create a new category', async () => {
  const categoryRepository = new CategoryMemoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
  await createCategoryUseCase.execute({ name: 'market', userId: '123' });
  expect(categoryRepository.data).toHaveLength(1);
  expect(categoryRepository.data[0].getName()).toEqual('market');
});
