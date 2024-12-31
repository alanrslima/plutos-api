import { HttpResponse } from './http-response';

export interface Controller<T, R> {
  handle: (params: T) => Promise<HttpResponse<R>>;
}
