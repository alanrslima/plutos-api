import { TransactionRepository } from '../../application/contract/repository/transaction-repository';
import { Transaction } from '../../domain/entity/transaction';

export class MemoryTransactionRepository implements TransactionRepository {
  public data: Transaction[];

  constructor(mock?: Transaction[]) {
    this.data = mock || [];
  }

  async create(transaction: Transaction): Promise<void> {
    this.data.push(transaction);
  }
}
