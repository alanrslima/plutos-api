import { BaseError, BaseErrorSerializeProps } from "../../common";

export class CategoryNotFoundError extends BaseError {
  statusCode = 400;

  constructor() {
    super("Category not found");
    Object.setPrototypeOf(this, CategoryNotFoundError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [
      {
        message: "Category not found",
        description: "The requested category does not exist",
      },
    ];
  }
}
