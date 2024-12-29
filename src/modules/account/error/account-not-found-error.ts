import { BaseError, BaseErrorSerializeProps } from "../../common";

export class AccountNotFoundError extends BaseError {
  statusCode = 400;

  constructor() {
    super("Account not found");
    Object.setPrototypeOf(this, AccountNotFoundError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [
      {
        message: "Account not found",
        description: "The requested account does not exist",
      },
    ];
  }
}
