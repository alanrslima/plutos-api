import { AccountRepository } from '../../application/contract/repository/account-repository';
import { Account } from '../../domain/entity/account';
import { AccountNotFoundError } from '../../error/account-not-found-error';

export class MemoryAccountRepository implements AccountRepository {
  public data: Account[];

  constructor(mock?: Account[]) {
    this.data = mock || [];
  }

  async create(account: Account): Promise<void> {
    this.data.push(account);
  }

  async getById(id: string): Promise<Account> {
    const account = this.data.find((item) => item.getId() === id);
    if (!account) throw new AccountNotFoundError();
    return account;
  }

  async update(account: Account): Promise<void> {
    this.data = this.data.filter((item) =>
      item.getId() === account.getId() ? account : item,
    );
  }
}
