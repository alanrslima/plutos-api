import { type Router } from 'express';
import { adaptRoute } from '../../../common';
import { createAccountControllerFactory } from '../factory/controller/create-account-controller-factory';
import { createCategoryControllerFactory } from '../factory/controller/create-category-controller-factory';
import { auth } from '../../../auth';
import { listCategoryControllerFactory } from '../factory/controller/list-category-controller-factory';
import { listAccountControllerFactory } from '../factory/controller/list-account-controller-factory';
import { addTransactionControllerFactory } from '../factory/controller/add-transaction-controller-factory';

const accountRoutes = (router: Router): void => {
  router.post('/account', auth, adaptRoute(createAccountControllerFactory()));
  router.get('/account', auth, adaptRoute(listAccountControllerFactory()));
  router.post(
    '/account/transaction',
    auth,
    adaptRoute(addTransactionControllerFactory()),
  );
  router.post('/category', auth, adaptRoute(createCategoryControllerFactory()));
  router.get('/category', auth, adaptRoute(listCategoryControllerFactory()));
};

export { accountRoutes };
