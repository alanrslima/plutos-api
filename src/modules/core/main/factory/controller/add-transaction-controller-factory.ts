import { Controller } from '../../../../common';
import { AddTransactionUseCase } from '../../../application/use-case/add-transaction-use-case';
import { AccountMysqlRepository } from '../../../infra/repository/account-mysql-repository';
import { CategoryMysqlRepository } from '../../../infra/repository/category-mysql-repository';
import { TransactionMysqlRepository } from '../../../infra/repository/transaction-mysql-repository';
import { AddTransactionController } from '../../../presentation/controller/add-transaction-controller';

export const addTransactionControllerFactory = (): Controller => {
  const accountRepository = new AccountMysqlRepository();
  const categoryRepository = new CategoryMysqlRepository();
  const transactionRepository = new TransactionMysqlRepository();
  const createAccountUseCase = new AddTransactionUseCase(
    accountRepository,
    categoryRepository,
    transactionRepository,
  );
  const controller = new AddTransactionController(createAccountUseCase);
  return controller;
};
