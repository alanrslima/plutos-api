import { HttpResponse } from './http-response';

export interface Middleware<T> {
  handle: (httpRequest: T) => Promise<HttpResponse<unknown>>;
}
