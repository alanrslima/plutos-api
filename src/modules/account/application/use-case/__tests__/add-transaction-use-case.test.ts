import { Account } from '../../../domain/entity/account';
import { Category } from '../../../domain/entity/category';
import { AccountForbiddenError } from '../../../error/account-forbidden-error';
import { AccountNotFoundError } from '../../../error/account-not-found-error';
import { CategoryForbiddenError } from '../../../error/category-forbidden-error';
import { CategoryNotFoundError } from '../../../error/category-not-found-error';
import { MemoryAccountRepository } from '../../../infra/repository/account-memory-repository';
import { MemoryCategoryRepository } from '../../../infra/repository/category-memory-repository';
import { TransactionMemoryRepository } from '../../../infra/repository/transaction-memory-repository';
import { AddTransactionUseCase } from '../add-transaction-use-case';

it('should throw forbidden error if the account does not exists', async () => {
  const memoryAccountRepository = new MemoryAccountRepository();
  const memoryTransactionRepository = new TransactionMemoryRepository();
  const memoryCategoryRepository = new MemoryCategoryRepository();
  const addTransactionUseCase = new AddTransactionUseCase(
    memoryAccountRepository,
    memoryCategoryRepository,
    memoryTransactionRepository,
  );
  try {
    await addTransactionUseCase.execute({
      accountId: '123',
      date: new Date().toISOString(),
      userId: '1',
      value: 20,
    });
  } catch (error) {
    expect(error).toBeDefined();
    expect(error).toBeInstanceOf(AccountNotFoundError);
    expect((error as AccountNotFoundError).serialize()).toHaveLength(1);
  }
});

it('should throw forbidden error if the user does not have access to the account', async () => {
  const account = Account.create({
    currency: 'US',
    initialBalance: 10,
    name: 'account name',
    ownerId: '2',
  });
  const memoryAccountRepository = new MemoryAccountRepository([account]);
  const memoryTransactionRepository = new TransactionMemoryRepository();
  const memoryCategoryRepository = new MemoryCategoryRepository();
  const addTransactionUseCase = new AddTransactionUseCase(
    memoryAccountRepository,
    memoryCategoryRepository,
    memoryTransactionRepository,
  );
  try {
    await addTransactionUseCase.execute({
      accountId: account.getId(),
      date: new Date().toISOString(),
      userId: '1',
      value: 20,
    });
  } catch (error) {
    expect(error).toBeDefined();
    expect(error).toBeInstanceOf(AccountForbiddenError);
    expect((error as AccountForbiddenError).serialize()).toHaveLength(1);
  }
});

it('should create transaction', async () => {
  const account = Account.create({
    currency: 'US',
    initialBalance: 10,
    name: 'account name',
    ownerId: '2',
  });
  const memoryAccountRepository = new MemoryAccountRepository([account]);
  const memoryTransactionRepository = new TransactionMemoryRepository();
  const memoryCategoryRepository = new MemoryCategoryRepository();
  const addTransactionUseCase = new AddTransactionUseCase(
    memoryAccountRepository,
    memoryCategoryRepository,
    memoryTransactionRepository,
  );
  const date = new Date().toISOString();
  await addTransactionUseCase.execute({
    accountId: account.getId(),
    date,
    userId: '2',
    value: 20,
  });
  expect(memoryTransactionRepository.data).toHaveLength(1);
  expect(memoryTransactionRepository.data[0].getValue()).toEqual(20);
  expect(memoryTransactionRepository.data[0].getDate()).toEqual(new Date(date));
  expect(memoryTransactionRepository.data[0].getId()).toBeDefined();
});

it('should update account balance', async () => {
  const account = Account.create({
    currency: 'US',
    initialBalance: 10,
    name: 'account name',
    ownerId: '2',
  });
  const memoryAccountRepository = new MemoryAccountRepository([account]);
  const memoryTransactionRepository = new TransactionMemoryRepository();
  const memoryCategoryRepository = new MemoryCategoryRepository();
  const addTransactionUseCase = new AddTransactionUseCase(
    memoryAccountRepository,
    memoryCategoryRepository,
    memoryTransactionRepository,
  );
  await addTransactionUseCase.execute({
    accountId: account.getId(),
    date: new Date().toISOString(),
    userId: '2',
    value: 20,
  });
  expect(memoryTransactionRepository.data).toHaveLength(1);
  expect(memoryTransactionRepository.data[0].getValue()).toEqual(20);
  expect(memoryAccountRepository.data).toHaveLength(1);
  expect(memoryAccountRepository.data[0].getBalance()).toEqual(30);
});

it('should throw an error if the category does not exists', async () => {
  const account = Account.create({
    currency: 'US',
    initialBalance: 10,
    name: 'account name',
    ownerId: '2',
  });
  const memoryAccountRepository = new MemoryAccountRepository([account]);
  const memoryTransactionRepository = new TransactionMemoryRepository();
  const memoryCategoryRepository = new MemoryCategoryRepository();
  const addTransactionUseCase = new AddTransactionUseCase(
    memoryAccountRepository,
    memoryCategoryRepository,
    memoryTransactionRepository,
  );
  try {
    await addTransactionUseCase.execute({
      accountId: account.getId(),
      date: new Date().toISOString(),
      userId: '2',
      value: 20,
      categoryId: '123',
    });
  } catch (error) {
    expect(error).toBeDefined();
    expect(error).toBeInstanceOf(CategoryNotFoundError);
  }
});

it('should throw an error if the user does not have access to the category', async () => {
  const account = Account.create({
    currency: 'US',
    initialBalance: 10,
    name: 'account name',
    ownerId: '2',
  });
  const category = Category.create({ name: 'category #1', userId: '1' });
  const memoryAccountRepository = new MemoryAccountRepository([account]);
  const memoryTransactionRepository = new TransactionMemoryRepository();
  const memoryCategoryRepository = new MemoryCategoryRepository([category]);
  const addTransactionUseCase = new AddTransactionUseCase(
    memoryAccountRepository,
    memoryCategoryRepository,
    memoryTransactionRepository,
  );
  try {
    await addTransactionUseCase.execute({
      accountId: account.getId(),
      date: new Date().toISOString(),
      userId: '2',
      value: 20,
      categoryId: category.getId(),
    });
  } catch (error) {
    expect(error).toBeDefined();
    expect(error).toBeInstanceOf(CategoryForbiddenError);
  }
});
