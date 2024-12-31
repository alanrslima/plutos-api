import { Controller } from "../../../../common";
import { CreateAccountUseCase } from "../../../application/use-case/create-account-use-case";
import { CreateAccountController } from "../../../presentation/controller/create-account-controller";

export const createAccountControllerFactory = (): Controller => {
  const accountRepository = new UserMysqlRepository();
  const signInEmailPasswordUseCase = new CreateAccountUseCase(
    userRepository,
    sessionRepository
  );
  const controller = new CreateAccountController(signInEmailPasswordUseCase);
  return controller;
};
