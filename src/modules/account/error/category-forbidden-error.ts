import { BaseError, BaseErrorSerializeProps } from '../../common';

export class CategoryForbiddenError extends BaseError {
  statusCode = 403;

  constructor() {
    super('Category Forbidden');
    Object.setPrototypeOf(this, CategoryForbiddenError.prototype);
  }

  serialize(): BaseErrorSerializeProps {
    return [
      {
        message: 'The user does not have permission to access this category',
      },
    ];
  }
}
