import { BaseError, BaseErrorSerializeProps } from '../../common';

export class InvalidCurrencyError extends BaseError {
  statusCode = 400;

  constructor() {
    super('Invalid currency');
    Object.setPrototypeOf(this, InvalidCurrencyError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [
      {
        message: 'The provided currency is invalid',
      },
    ];
  }
}
