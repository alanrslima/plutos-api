import { availablePermissions } from "../../modules/auth/domain/contract/available-permissions";
import { adaptMiddleware } from "../adapter/express-middleware-adapter";
import { canMiddlewareFactory } from "../factory/middleware/can-middleware-factory";

export const can = (permissions: Array<keyof typeof availablePermissions>) =>
  adaptMiddleware(canMiddlewareFactory(permissions));
