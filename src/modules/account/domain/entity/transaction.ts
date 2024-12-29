import { ID } from "../value-object/id";
import { Account } from "./account";

type CreateTransactionProps = {
  date: Date;
  value: number;
  accountId: string;
  categoryId?: string;
};

type BuildTransactionProps = CreateTransactionProps & {
  id: string;
};

export class Transaction {
  private id: ID;
  private date: Date;
  private value: number;
  private accountId: string;
  private categoryId?: string;

  private constructor(props: BuildTransactionProps) {
    this.id = new ID(props.id);
    this.date = props.date;
    this.value = props.value;
    this.accountId = props.accountId;
    this.categoryId = props.categoryId;
  }

  static create(props: CreateTransactionProps) {
    return new Transaction({ id: new ID().getValue(), ...props });
  }

  getId(): string {
    return this.id.getValue();
  }

  getDate(): Date {
    return this.date;
  }

  getValue(): number {
    return this.value;
  }
}
