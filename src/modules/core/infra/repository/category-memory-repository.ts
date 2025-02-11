import { CategoryRepository } from '../../application/contract/repository/category-repository';
import { Category } from '../../domain/entity/category';
import { CategoryNotFoundError } from '../../error/category-not-found-error';

export class CategoryMemoryRepository implements CategoryRepository {
  public data: Category[];

  constructor(mock?: Category[]) {
    this.data = mock || [];
  }

  async create(category: Category): Promise<void> {
    this.data.push(category);
  }

  async getById(id: string): Promise<Category> {
    const category = this.data.find((item) => item.getId() === id);
    if (!category) throw new CategoryNotFoundError();
    return category;
  }

  async deleteById(id: string): Promise<void> {
    this.data = this.data.filter((item) => item.getId() !== id);
  }
}
