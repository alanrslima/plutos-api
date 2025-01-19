import { Controller } from '../../../../common';
import { AccountMysqlQuery } from '../../../infra/query/account-mysql-query';
import { ListAccountController } from '../../../presentation/controller/list-account-controller';

export const listAccountControllerFactory = (): Controller => {
  const accountQuery = new AccountMysqlQuery();
  const controller = new ListAccountController(accountQuery);
  return controller;
};
