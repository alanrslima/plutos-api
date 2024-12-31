import { InvalidCredentialsError } from '../../error/invalid-credentials-error';
import { Id } from '../value-object/id';
import { Session } from './session';
import { User } from './user';

type CreateWithoutPasswordProps = {
  user: User;
};

type CreateWithPasswordProps = CreateWithoutPasswordProps & {
  rawPassword: string;
};

export class UserSession extends Session {
  static createWithoutPassword(props: CreateWithoutPasswordProps) {
    return new UserSession({
      expiresAt: this.generateExpiresAt(),
      token: this.createToken({
        clientId: props.user.getId(),
        clientType: 'user',
      }),
      id: new Id().getValue(),
      clientId: props.user.getId(),
      clientType: 'user',
    });
  }

  static createWithPassword(props: CreateWithPasswordProps) {
    const isValid = props.user.getPassword()?.valid(props.rawPassword);
    if (!isValid) {
      throw new InvalidCredentialsError();
    }
    return new UserSession({
      expiresAt: this.generateExpiresAt(),
      token: this.createToken({
        clientId: props.user.getId(),
        clientType: 'user',
      }),
      id: new Id().getValue(),
      clientId: props.user.getId(),
      clientType: 'user',
    });
  }
}
