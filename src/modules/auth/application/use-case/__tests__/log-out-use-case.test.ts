import { User } from '../../../domain/entity/user';
import { UserSession } from '../../../domain/entity/user-session';
import { SessionMemoryRepository } from '../../../infra/repository/session-memory-repository';
import { LogOutUseCase } from '../log-out-use-case';

it('should logout an user session', async () => {
  const user = User.create({
    email: 'johndoe@email.com',
    name: 'John Doe',
    role: 'admin',
  });
  const session = UserSession.createWithoutPassword({ user });
  const sessionMemoryRepository = new SessionMemoryRepository([session]);
  const logOutUseCase = new LogOutUseCase(sessionMemoryRepository);
  expect(sessionMemoryRepository.getData().length).toEqual(1);
  await logOutUseCase.execute({ session: { id: session.getId() } });
  expect(sessionMemoryRepository.getData().length).toEqual(0);
});
