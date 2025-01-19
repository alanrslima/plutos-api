import { Controller, HttpResponse, ok } from '../../../common';
import { AccountQuery } from '../../application/query/account-query';

export class ListAccountController implements Controller {
  constructor(private readonly accountQuery: AccountQuery) {}

  async handle(params: any): Promise<HttpResponse<unknown>> {
    const data = await this.accountQuery.list({
      userId: params.session.user.id,
    });
    return ok(data);
  }
}
