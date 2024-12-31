import { HttpResponse } from './http-response';

export interface Middleware<T, P> {
  handle: (httpRequest: T) => Promise<HttpResponse<P>>;
}
