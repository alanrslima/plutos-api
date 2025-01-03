import { MysqlDataSource } from '../../../common';
import { AccountRepository } from '../../application/contract/repository/account-repository';
import { Account } from '../../domain/entity/account';
import { AccountNotFoundError } from '../../error/account-not-found-error';

export class AccountMysqlRepository implements AccountRepository {
  async create(account: Account): Promise<void> {
    const sql = `INSERT INTO account (id, name, balance, currency, initial_balance, owner_id) VALUES (?,?,?,?,?,?)`;
    await MysqlDataSource.query(sql, [
      account.getId(),
      account.getName(),
      account.getBalance(),
      account.getCurrency(),
      account.getInitialBalance(),
      account.getOwnerId(),
    ]);
  }

  async listById(id: string): Promise<Account> {
    const sql = `SELECT id, name, owner_id as ownerId, balance, currency, initial_balance as initialBalance FROM account WHERE id = ?`;
    const response = await MysqlDataSource.query(sql, [id]);
    if (!response.length) {
      throw new AccountNotFoundError();
    }
    const [data] = response;
    return Account.build(data);
  }

  async update(account: Account): Promise<void> {
    throw new Error('Method not implemented');
  }
}
