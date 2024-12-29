import { adaptMiddleware } from "../../../../common";
import { authMiddlewareFactory } from "../../factory/middleware/auth-middleware-factory";

export const auth = adaptMiddleware(authMiddlewareFactory());
