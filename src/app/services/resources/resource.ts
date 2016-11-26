/**
 * Resource creator
 */

import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


/**
 * Crud
 */
@Injectable()
export class Resource {
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  protected tempUrl: string;
  protected url: string;

  constructor(
    private http: Http
  ) { }

  /**
   */
  delete(params: any): Observable<any> {
    return this.sendRequest('delete', params);
  }

  /**
   * Create method
   */
  post(params: any, data?: any): Observable<any> {

    // no params
    if (arguments.length === 1) {
      data = params;
      params = null;
    }

    return this.sendRequest('post', params, data);
  }

  /**
   * Update method
   */
  put(params: any, data?: any): Observable<any> {

    // no params
    if (arguments.length === 1) {
      data = params;
      params = null;
    }

    return this.sendRequest('put', params, data);
  }

  /**
   * Query method: returns an object or array
   */
  query(params?: any): Observable<any> {
    return this.sendRequest('get', params);
  }

  /**
   * Create search params
   * @param params
   * @returns {URLSearchParams}
   */
  private createOptions(params?: any): {
    headers: Headers,
    search: URLSearchParams
  } {
    if (!params) { return null; }

    const searchParams = new URLSearchParams();

    for (let key of Object.keys(params)) {
      searchParams.set(key, params[key]);
    }

    return {
      headers: this.headers,
      search: searchParams
    };
  }

  /**
   * Extract data
   * @param res
   * @returns {any}
   */
  private extractData(res: Response) {
    return res.json();
  }

  /**
   * Handle resources error: interceptors here
   * @param error
   * @returns {any}
   */
  private handleError(error: Response | any) {
    alert(JSON.stringify(error));
    return Observable.throw(`${error.status} - ${error.statusText || ''}`);
  }

  /**
   * General method
   * @param method
   * @param params
   * @param data
   * @returns {Observable<any>}
   */
  private sendRequest(method: string, params?: any, data?: any): Observable<any> {
    const options = this.createOptions(params);

    if (method === 'get' || method === 'delete') {
      return this.http[method](this.url, options)
        .map(this.extractData)
        .catch(this.handleError);
    } else {
      return this.http[method](this.url, data, options)
        .map(this.extractData)
        .catch(this.handleError);
    }
  }

  /**
   * Custom resources requests
   * @param action
   * @param option
   */
  private setAction(action: string, option: any) {
    const method = this[option.method];

    this[action] = function () {
      this.tempUrl = this.url;
      this.url = option.url;
      const result = method.call(this, arguments);
      this.url = this.tempUrl;
      return result;
    };
  }

  /**
   * Set all options
   * @param options
   */
  protected setAllActions(options: any) {
    for (let action of Object.keys(options)) {
      this.setAction(action, options[action]);
    }
  }
}
