import { MysqlDataSource } from '../../../common';
import { CategoryRepository } from '../../application/contract/repository/category-repository';
import { Category } from '../../domain/entity/category';
import { CategoryNotFoundError } from '../../error/category-not-found-error';

export class CategoryMysqlRepository implements CategoryRepository {
  public data: Category[];

  constructor(mock?: Category[]) {
    this.data = mock || [];
  }

  async create(category: Category): Promise<void> {
    const sql = `INSERT INTO category (id, name, user_id) VALUES (?,?,?)`;
    await MysqlDataSource.query(sql, [
      category.getId(),
      category.getName(),
      category.getUserId(),
    ]);
  }

  async getById(id: string): Promise<Category> {
    const sql = `SELECT id, name, user_id FROM category WHERE id = ?`;
    const response = await MysqlDataSource.query(sql, [id]);
    if (!response.length) {
      throw new CategoryNotFoundError();
    }
    const [data] = response;
    return Category.build({
      id: data.id,
      name: data.name,
      userId: data.user_id,
    });
  }

  async deleteById(id: string): Promise<void> {
    const sql = `DELETE FROM category WHERE id = ?`;
    await MysqlDataSource.query(sql, [id]);
  }
}
