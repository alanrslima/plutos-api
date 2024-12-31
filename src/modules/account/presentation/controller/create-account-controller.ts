import { Controller, created, HttpResponse } from "../../../common";
import { CreateAccountUseCase } from "../../application/use-case/create-account-use-case";

export class CreateAccountController implements Controller {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

  async handle(params: any): Promise<HttpResponse<any>> {
    const data = await this.createAccountUseCase.execute(params);
    return created(data);
  }
}
