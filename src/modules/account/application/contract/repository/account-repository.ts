import { Account } from '../../../domain/entity/account';

export interface AccountRepository {
  create(account: Account): Promise<void>;
  listById(id: string): Promise<Account>;
  update(account: Account): Promise<void>;
}
