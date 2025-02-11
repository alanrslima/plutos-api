import { ID } from '../value-object/id';

type CreateTransactionProps = {
  date: Date;
  value: number;
  accountId: string;
  categoryId?: string;
  notes?: string;
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
  private notes?: string;

  private constructor(props: BuildTransactionProps) {
    this.id = new ID(props.id);
    this.date = props.date;
    this.value = props.value;
    this.accountId = props.accountId;
    this.categoryId = props.categoryId;
    this.notes = props.notes;
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

  getNotes(): string | undefined {
    return this.notes;
  }

  getAccountId(): string {
    return this.accountId;
  }

  getCategoryId(): string | undefined {
    return this.categoryId;
  }
}
