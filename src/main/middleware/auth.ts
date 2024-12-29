import { authMiddlewareFactory } from "../../modules/auth/main/factory/middleware/auth-middleware-factory";
import { adaptMiddleware } from "../adapter/express-middleware-adapter";

export const auth = adaptMiddleware(authMiddlewareFactory());
