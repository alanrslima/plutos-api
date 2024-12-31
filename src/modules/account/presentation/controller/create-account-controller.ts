import { Controller, created, HttpResponse } from '../../../common';
import {
  CreateAccountUseCase,
  Input,
} from '../../application/use-case/create-account-use-case';

export class CreateAccountController implements Controller {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

  async handle(params: unknown): Promise<HttpResponse<unknown>> {
    const data = await this.createAccountUseCase.execute(params as Input);
    return created(data);
  }
}
