import { Controller } from '../../../../common';
import { CreateAccountUseCase } from '../../../application/use-case/create-account-use-case';
import { AccountMysqlRepository } from '../../../infra/repository/account-mysql-repository';
import { CreateAccountController } from '../../../presentation/controller/create-account-controller';

export const createAccountControllerFactory = (): Controller => {
  const accountRepository = new AccountMysqlRepository();
  const createAccountUseCase = new CreateAccountUseCase(accountRepository);
  const controller = new CreateAccountController(createAccountUseCase);
  return controller;
};
