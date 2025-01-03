import { type Router } from 'express';
import { adaptRoute } from '../../../common';
import { createAccountControllerFactory } from '../factory/controller/create-account-controller-factory';
import { createCategoryControllerFactory } from '../factory/controller/create-category-controller-factory';
import { auth } from '../../../auth';

const accountRoutes = (router: Router): void => {
  router.post('/account', auth, adaptRoute(createAccountControllerFactory()));
  router.post(
    '/account/transaction',
    auth,
    adaptRoute(createAccountControllerFactory()),
  );
  router.post('/category', auth, adaptRoute(createCategoryControllerFactory()));
};

export { accountRoutes };
