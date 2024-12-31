import { Account } from '../../domain/entity/account';
import { AccountRepository } from '../contract/repository/account-repository';
import { UseCase } from '../contract/use-case';

export class CreateAccountUseCase implements UseCase<Input, Output> {
  constructor(private readonly accountRepository: AccountRepository) {}

  async execute(input: Input): Promise<void> {
    const account = Account.create({
      currency: input.currency,
      initialBalance: input.initialBalance,
      name: input.name,
      ownerId: input.ownerId,
    });
    await this.accountRepository.create(account);
  }
}

export type Input = {
  name: string;
  initialBalance: number;
  currency: string;
  ownerId: string;
};

export type Output = void;
