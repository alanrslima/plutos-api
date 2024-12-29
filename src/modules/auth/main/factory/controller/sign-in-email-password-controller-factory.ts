import { Controller } from "../../../../common";
import { SignInEmailPasswordUseCase } from "../../../application/use-case/sign-in-email-password-use-case";
import { SessionMemoryRepository } from "../../../infra/repository/session-memory-repository";
import { UserMemoryRepository } from "../../../infra/repository/user-memory-repository";
import { SignInEmailPasswordController } from "../../../presentation/controller/sign-in-email-password-controller";

export const signInEmailPasswordControllerFactory = (): Controller => {
  const userRepository = new UserMemoryRepository();
  const sessionRepository = new SessionMemoryRepository();
  const signInEmailPasswordUseCase = new SignInEmailPasswordUseCase(
    userRepository,
    sessionRepository
  );
  const controller = new SignInEmailPasswordController(
    signInEmailPasswordUseCase
  );
  return controller;
};
