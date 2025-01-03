import { type Router } from 'express';
import { adaptRoute } from '../../../common';
import { signInEmailPasswordControllerFactory } from '../factory/controller/sign-in-email-password-controller-factory';
import { signUpControllerFactory } from '../factory/controller/sign-up-controller-factory';
import { getMeControllerFactory } from '../factory/controller/get-me-controller-factory';
import { auth } from '../config/middleware/auth';

const authRoutes = (router: Router): void => {
  router.post(
    '/auth/sign-in',
    adaptRoute(signInEmailPasswordControllerFactory()),
  );
  router.post('/auth/sign-up', adaptRoute(signUpControllerFactory()));
  router.get('/auth/me', auth, adaptRoute(getMeControllerFactory()));
};

export { authRoutes };
