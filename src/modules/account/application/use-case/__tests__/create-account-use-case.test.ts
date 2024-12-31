import { MemoryAccountRepository } from '../../../infra/repository/account-memory-repository';
import { CreateAccountUseCase } from '../create-account-use-case';

it('should create an account', async () => {
  const memoryAccountRepository = new MemoryAccountRepository();
  const createAccountUseCase = new CreateAccountUseCase(
    memoryAccountRepository,
  );
  await createAccountUseCase.execute({
    currency: 'US',
    initialBalance: 0,
    name: 'test',
    ownerId: '123',
  });
  expect(memoryAccountRepository.data).toHaveLength(1);
});
