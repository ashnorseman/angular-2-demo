/**
 * Test http service
 */

import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class TestHttpService {
  private options: RequestOptions = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });

  url: string = '/api/test';

  constructor(
    private http: Http,
  ) { }

  getMethod(params?: Object): Observable<Object> {
    const searchParams = new URLSearchParams();

    if (params) {
      for (let key of Object.keys(params)) {
        searchParams.set(key, params[key]);
      }
    }

    return this.http
      .get(this.url, {
        search: searchParams
      })
      .map(this.extractData)
      .catch(this.handleError);
  }

  postMethod(data): Observable<Object> {
    return this.http
      .post(this.url, data, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  postError(): Observable<Object> {
    return this.http
      .post(`${this.url}/error`, null, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError(error: Response | any) {
    return Observable.throw(`${error.status} - ${error.statusText || ''}`);
  }
}
