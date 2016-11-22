/**
 * Authentication service
 */

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthenticationService {
  private options: RequestOptions = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });

  constructor(
    private http: Http
  ) { }

  login(username: string, password: string): Observable<void> {

    return this.http
      .post('/api/authenticate', { username, password }, this.options)
      .map((res: Response) => {
        let user = res.json();

        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
