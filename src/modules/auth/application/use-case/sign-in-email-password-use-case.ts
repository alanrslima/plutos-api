import { UseCase } from "../../../account/application/contract/use-case";
import { UserSession } from "../../domain/entity/user-session";
import { InvalidCredentialsError } from "../../error/invalid-credentials-error";
import { SessionRepository } from "../contract/repository/session-repository";
import { UserRepository } from "../contract/repository/user-repository";

export class SignInEmailPasswordUseCase implements UseCase<Input, Output> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sessionRepository: SessionRepository
  ) {}

  async execute(input: Input): Promise<Output> {
    const user = await this.userRepository.getByEmail(input.email);
    if (!user) {
      throw new InvalidCredentialsError();
    }
    if (user.getStatus() !== "approved") {
      throw new InvalidCredentialsError();
    }
    const session = UserSession.createWithPassword({
      rawPassword: input.password,
      user,
    });
    await this.sessionRepository.create(session);
    return { token: session.getToken() };
  }
}

type Input = {
  email: string;
  password: string;
};

type Output = { token: string };
