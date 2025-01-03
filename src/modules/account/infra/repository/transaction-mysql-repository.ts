import { MysqlDataSource } from '../../../common';
import { TransactionRepository } from '../../application/contract/repository/transaction-repository';
import { Transaction } from '../../domain/entity/transaction';

export class TransactionMysqlRepository implements TransactionRepository {
  async create(transaction: Transaction): Promise<void> {
    const sql = `INSERT INTO transaction (id, date, value, notes, account_id, category_id) VALUES (?,?,?,?,?,?)`;
    await MysqlDataSource.query(sql, [
      transaction.getId(),
      transaction.getDate(),
      transaction.getValue(),
      transaction.getNotes(),
      transaction.getAccountId(),
      transaction.getCategoryId(),
    ]);
  }
}
