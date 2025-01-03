import { Controller, created, HttpResponse } from '../../../common';
import {
  CreateCategoryUseCase,
  Input,
} from '../../application/use-case/create-category-use-case';

export class CreateCategoryController implements Controller {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(params: any): Promise<HttpResponse<unknown>> {
    const data = await this.createCategoryUseCase.execute({
      ...params,
      userId: params.session.user.id,
    } as Input);
    return created(data);
  }
}
