import { MysqlDataSource } from '../../../common';
import {
  CategoryQuery,
  CategoryQueryListParams,
  CategoryQueryListResponse,
} from '../../application/query/category-query';

export class CategoryMysqlQuery implements CategoryQuery {
  async list(
    params: CategoryQueryListParams,
  ): Promise<CategoryQueryListResponse> {
    const sql = `SELECT id, name FROM category WHERE user_id = ?`;
    return await MysqlDataSource.query(sql, [params.userId]);
  }
}
