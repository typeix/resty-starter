import {Route, Injectable, IResolvedRoute, Inject, HttpMethod} from "@typeix/rexxar";
import {InMemoryCache} from "./in-memory-cache";

/**
 * Dynamic route rule
 * @constructor
 * @function
 * @name DynamicRouteRule
 *
 * @description
 * Here we can define dynamic route rule which has to implement Route
 */
@Injectable()
export class DynamicRouteRule implements Route {

  @Inject() cache: InMemoryCache;

  /**
   * Dynamic parse request example
   * @param pathName
   * @param method
   * @param headers
   * @returns {Promise<{method: HttpMethod, params: {}, route: string}>}
   */
  parseRequest(pathName: string, method: string, headers: { [key: string]: any }): Promise<IResolvedRoute> {
    return Promise.resolve(
      {
        headers,
        method: HttpMethod.GET,
        params: {
          pathName,
          method,
          headers
        },
        route: "core/not_found"
      }
    );
  }

  /**
   * Create url pattern
   * @param routeName
   * @param params
   * @returns {undefined}
   */
  createUrl(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    routeName: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params: Object):
    Promise<string> {
    return null;
  }

}
