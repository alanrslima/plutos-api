import { Category } from '../../../domain/entity/category';

export interface CategoryRepository {
  create(category: Category): Promise<void>;
  getById(id: string): Promise<Category>;
  deleteById(id: string): Promise<void>;
}
