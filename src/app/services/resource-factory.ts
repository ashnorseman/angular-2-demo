/**
 * Resource creator
 */

import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


/**
 * Crud
 */
export class Crud {
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  private _url: string;

  constructor(
    private url: string,
    private http: Http
  ) { }


  /**
   * Query method: returns an object or array
   */
  query(params?: any): Observable<any> {
    return this.sendRequest('get', params);
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
   */
  delete(params: any): Observable<any> {
    return this.sendRequest('delete', params);
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
   * Custom http requests
   * @param action
   * @param option
   */
  setAction(action: string, option: any) {
    const method = this[option.method];

    this[action] = function () {
      this._url = this.url;
      this.url = option.url;
      const result = method.call(this, arguments);
      this.url = this._url;
      return result;
    };
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
   * Handle http error: interceptors here
   * @param error
   * @returns {any}
   */
  private handleError(error: Response | any) {
    alert(JSON.stringify(error));
    return Observable.throw(`${error.status} - ${error.statusText || ''}`);
  }
}


/**
 * Resource class
 */
@Injectable()
export class Resource {

  constructor(
    private http: Http
  ) { }

  create(url: string, options?) {
    const crud = new Crud(url, this.http);

    if (options) {
      for (let action of Object.keys(options)) {
        crud.setAction(action, options[action]);
      }
    }

    return crud;
  }
}
