import { MysqlDataSource } from "../../../common";
import { AccountRepository } from "../../application/contract/repository/account-repository";
import { Account } from "../../domain/entity/account";
import { AccountNotFoundError } from "../../error/account-not-found-error";

export class AccountMysqlRepository implements AccountRepository {
  public data: Account[];

  constructor(mock?: Account[]) {
    this.data = mock || [];
  }

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
    const account = this.data.find((item) => item.getId() === id);
    if (!account) throw new AccountNotFoundError();
    return account;
  }

  async update(account: Account): Promise<void> {
    this.data = this.data.filter((item) =>
      item.getId() === account.getId() ? account : item
    );
  }
}
