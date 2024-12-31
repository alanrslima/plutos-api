import { Category } from '../../../domain/entity/category';

export interface CategoryRepository {
  create(category: Category): Promise<void>;
  listById(id: string): Promise<Category>;
}
