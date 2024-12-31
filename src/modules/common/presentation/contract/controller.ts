import { HttpResponse } from './http-response';

export interface Controller<T = unknown> {
  handle: (params: T) => Promise<HttpResponse<unknown>>;
}
