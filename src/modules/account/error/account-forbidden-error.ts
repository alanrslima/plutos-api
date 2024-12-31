import { BaseError, BaseErrorSerializeProps } from '../../common';

export class AccountForbiddenError extends BaseError {
  statusCode = 403;

  constructor() {
    super('Account Forbidden');
    Object.setPrototypeOf(this, AccountForbiddenError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [
      {
        message: 'The user does not have permission to access this account',
      },
    ];
  }
}
