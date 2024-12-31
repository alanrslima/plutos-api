import { HttpResponse, Middleware, ok } from "../../../common";
import { ForbiddenError } from "../../error/forbidden-error";

export class CanMiddleware implements Middleware {
  constructor(private readonly permissions: string[]) {}

  private canAccess(userPermissions?: string[]) {
    for (let index = 0; index < this.permissions.length; index++) {
      const permission = this.permissions[index];
      const hasPermission = userPermissions?.some(
        (userPermission) => userPermission === permission
      );
      if (!hasPermission) return false;
    }
    return true;
  }

  async handle(request: AuthMiddlewareRequest): Promise<HttpResponse<any>> {
    const { session } = request;
    if (this.canAccess(session?.permissions)) {
      return ok({});
    } else {
      throw new ForbiddenError();
    }
  }
}

export type AuthMiddlewareRequest = {
  session: {
    id: string;
    clientId: string;
    clientType: string;
    permissions: string[];
  };
};