import jwt from "jsonwebtoken";
import { env } from "../../../common";

const EXPIRES_IN_SECONDS = 60 * 60 * 24; // 1 dia

export type ClientTypes = "user" | "device";

type CreateProps = {
  token: string;
  expiresAt: Date;
  clientId: string;
  clientType: ClientTypes;
};

type BuildProps = CreateProps & {
  id: string;
};

export class Session {
  private id: string;
  private token: string;
  private expiresAt: Date;
  private clientId: string;
  private clientType: ClientTypes;

  constructor(props: BuildProps) {
    this.id = props.id;
    this.token = props.token;
    this.expiresAt = props.expiresAt;
    this.clientId = props.clientId;
    this.clientType = props.clientType;
  }

  static build(props: BuildProps) {
    return new Session(props);
  }

  protected static generateExpiresAt() {
    return new Date(new Date().getTime() + EXPIRES_IN_SECONDS * 1000);
  }

  protected static createToken(data: {
    clientId: string;
    clientType: ClientTypes;
  }): string {
    const ciphertext = jwt.sign({}, env.JWT_SECRET, {
      subject: JSON.stringify(data),
      expiresIn: EXPIRES_IN_SECONDS,
    });
    return ciphertext;
  }

  getToken() {
    return this.token;
  }

  getId() {
    return this.id;
  }

  getExpiresAt() {
    return this.expiresAt;
  }

  getClientId() {
    return this.clientId;
  }

  getClientType() {
    return this.clientType;
  }
}
