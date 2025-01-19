import { ID } from '../value-object/id';

type CreateCategoryProps = {
  name: string;
  userId: string;
};

type BuildCategoryProps = CreateCategoryProps & {
  id: string;
};

export class Category {
  private id: ID;
  private name: string;
  private userId: string;

  private constructor(props: BuildCategoryProps) {
    this.id = new ID(props.id);
    this.name = props.name;
    this.userId = props.userId;
  }

  static create(props: CreateCategoryProps) {
    return new Category({ id: new ID().getValue(), ...props });
  }

  static build(props: BuildCategoryProps) {
    return new Category(props);
  }

  getId(): string {
    return this.id.getValue();
  }

  getName(): string {
    return this.name;
  }

  getUserId(): string {
    return this.userId;
  }
}
