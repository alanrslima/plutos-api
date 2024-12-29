import { Transaction } from "../../domain/entity/transaction";
import { AccountForbiddenError } from "../../error/account-forbidden-error";
import { CategoryForbiddenError } from "../../error/category-forbidden-error";
import { AccountRepository } from "../contract/repository/account-repository";
import { CategoryRepository } from "../contract/repository/category-repository";
import { TransactionRepository } from "../contract/repository/transaction-repository";
import { UseCase } from "../contract/use-case";

export class AddTransactionUseCase implements UseCase<Input, Output> {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly transactionRepository: TransactionRepository
  ) {}

  async execute(input: Input): Promise<void> {
    const account = await this.accountRepository.listById(input.accountId);
    if (account.getOwnerId() !== input.userId)
      throw new AccountForbiddenError();
    if (input.categoryId) {
      const category = await this.categoryRepository.listById(input.categoryId);
      if (category.getUserId() !== input.userId)
        throw new CategoryForbiddenError();
    }
    const transaction = Transaction.create({
      accountId: account.getId(),
      date: new Date(input.date),
      value: input.value,
      categoryId: input.categoryId,
    });
    account.updateBalance(transaction);
    await this.transactionRepository.create(transaction);
    await this.accountRepository.update(account);
  }
}

type Input = {
  accountId: string;
  categoryId?: string;
  date: string;
  value: number;
  userId: string;
};

type Output = void;
