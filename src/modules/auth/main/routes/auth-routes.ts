import { type Router } from 'express';
import { adaptRoute } from '../../../common';
import { signInEmailPasswordControllerFactory } from '../factory/controller/sign-in-email-password-controller-factory';
import { signUpControllerFactory } from '../factory/controller/sign-up-controller-factory';

const authRoutes = (router: Router): void => {
  router.post(
    '/auth/sign-in',
    adaptRoute(signInEmailPasswordControllerFactory()),
  );
  router.post('/auth/sign-up', adaptRoute(signUpControllerFactory()));
};

export { authRoutes };
