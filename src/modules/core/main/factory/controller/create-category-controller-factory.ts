import { Controller } from '../../../../common';
import { CreateCategoryUseCase } from '../../../application/use-case/create-category-use-case';
import { CategoryMysqlRepository } from '../../../infra/repository/category-mysql-repository';
import { CreateCategoryController } from '../../../presentation/controller/create-category-controller';

export const createCategoryControllerFactory = (): Controller => {
  const categoryRepository = new CategoryMysqlRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
  const controller = new CreateCategoryController(createCategoryUseCase);
  return controller;
};
