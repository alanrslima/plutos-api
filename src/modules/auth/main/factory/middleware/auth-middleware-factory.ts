import { AuthMiddleware } from '../../../presentation/middlewares/auth-middleware';
import { Middleware } from '../../../../common';
import { UserMysqlRepository } from '../../../infra/repository/user-mysql-repository';

export const authMiddlewareFactory = (): Middleware => {
  const userRepository = new UserMysqlRepository();
  return new AuthMiddleware(userRepository);
};
