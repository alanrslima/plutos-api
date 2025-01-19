import { Controller, created, HttpResponse } from '../../../common';
import {
  CreateAccountUseCase,
  Input,
} from '../../application/use-case/create-account-use-case';

export class CreateAccountController implements Controller {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

  async handle(params: any): Promise<HttpResponse<unknown>> {
    const data = await this.createAccountUseCase.execute({
      ...params,
      ownerId: params.session.user.id,
    } as Input);
    return created(data);
  }
}
