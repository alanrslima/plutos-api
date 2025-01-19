import { Controller, HttpResponse, ok } from '../../../common';
import { CategoryQuery } from '../../application/query/category-query';

export class ListCategoryController implements Controller {
  constructor(private readonly categoryQuery: CategoryQuery) {}

  async handle(params: any): Promise<HttpResponse<unknown>> {
    const data = await this.categoryQuery.list({
      userId: params.session.user.id,
    });
    return ok(data);
  }
}
