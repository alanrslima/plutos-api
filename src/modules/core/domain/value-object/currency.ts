import { InvalidCurrencyError } from '../../error/invalid-currency-error';

export class Currency {
  private value: number;

  constructor(value: number) {
    if (!this.isNumber(value)) {
      throw new InvalidCurrencyError();
    }
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  private isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
  }
}
