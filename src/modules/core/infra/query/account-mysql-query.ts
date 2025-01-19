import { MysqlDataSource } from '../../../common';
import {
  AccountQuery,
  AccountQueryListParams,
  AccountQueryListResponse,
} from '../../application/query/account-query';

export class AccountMysqlQuery implements AccountQuery {
  async list(
    params: AccountQueryListParams,
  ): Promise<AccountQueryListResponse> {
    const sql = `SELECT 
      id, 
      name, 
      initial_balance as initialBalance,
      balance,
      currency,
      created_at as createdAt
    FROM account 
    WHERE owner_id = ?`;
    return await MysqlDataSource.query(sql, [params.userId]);
  }
}
