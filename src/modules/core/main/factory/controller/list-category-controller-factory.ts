import { Controller } from '../../../../common';
import { CategoryMysqlQuery } from '../../../infra/query/category-mysql-query';
import { ListCategoryController } from '../../../presentation/controller/list-category-controller';

export const listCategoryControllerFactory = (): Controller => {
  const categoryQuery = new CategoryMysqlQuery();
  const controller = new ListCategoryController(categoryQuery);
  return controller;
};
