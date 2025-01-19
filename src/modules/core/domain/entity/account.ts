import { Currency } from '../value-object/currency';
import { ID } from '../value-object/id';
import { Transaction } from './transaction';

type CreateAccountProps = {
  name: string;
  initialBalance: number;
  currency: string;
  ownerId: string;
};

type BuildAccountProps = CreateAccountProps & {
  id: string;
  balance: number;
};

export class Account {
  private id: ID;
  private ownerId: ID;
  private name: string;
  private initialBalance: Currency;
  private currency: string;
  private balance: Currency;

  private constructor(props: BuildAccountProps) {
    this.id = new ID(props.id);
    this.ownerId = new ID(props.ownerId);
    this.name = props.name;
    this.initialBalance = new Currency(props.initialBalance);
    this.currency = props.currency;
    this.balance = new Currency(props.balance);
  }

  static create(props: CreateAccountProps) {
    return new Account({
      id: new ID().getValue(),
      balance: props.initialBalance,
      ...props,
    });
  }

  static build(props: BuildAccountProps) {
    return new Account({ ...props });
  }

  getId(): string {
    return this.id.getValue();
  }

  getName(): string {
    return this.name;
  }

  getInitialBalance(): number {
    return this.initialBalance.getValue();
  }

  getCurrency(): string {
    return this.currency;
  }

  getBalance(): number {
    return this.balance.getValue();
  }

  getOwnerId(): string {
    return this.ownerId.getValue();
  }

  updateBalance(transaction: Transaction) {
    this.balance = new Currency(
      this.balance.getValue() + transaction.getValue(),
    );
  }
}
