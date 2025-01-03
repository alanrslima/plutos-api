import { type Request, type Response, type NextFunction } from 'express';
import { Middleware } from '../../presentation/contract/middleware';

export const adaptMiddleware = (
  middleware: Middleware<unknown, { statusCode: number; message: string }>,
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      accessToken: req.headers?.['x-access-token'],
      ...(req.headers ?? {}),
      ...req,
    };
    const httpResponse = await middleware.handle(request);
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body);
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        message: httpResponse.body.message,
      });
    }
  };
};
