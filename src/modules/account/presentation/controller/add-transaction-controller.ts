import { Controller, created, HttpResponse } from '../../../common';
import {
  AddTransactionUseCase,
  Input,
} from '../../application/use-case/add-transaction-use-case';

export class AddTransactionController implements Controller {
  constructor(private readonly addTransactionUseCase: AddTransactionUseCase) {}

  async handle(params: any): Promise<HttpResponse<unknown>> {
    const data = await this.addTransactionUseCase.execute({
      ...params,
      userId: params.session.user.id,
    } as Input);
    return created(data);
  }
}
