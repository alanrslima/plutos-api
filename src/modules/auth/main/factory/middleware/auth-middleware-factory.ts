import { AuthMiddleware } from '../../../presentation/middlewares/auth-middleware';
import { UserMemoryRepository } from '../../../infra/repository/user-memory-repository';
import { SessionMemoryRepository } from '../../../infra/repository/session-memory-repository';
import { Middleware } from '../../../../common';

export const authMiddlewareFactory = (): Middleware => {
  const userRepository = new UserMemoryRepository();
  const sessionMysqlRepository = new SessionMemoryRepository();
  return new AuthMiddleware(userRepository, sessionMysqlRepository);
};
