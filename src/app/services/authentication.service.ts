/**
 * Authentication service
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoginResources } from './resources/login.resource';


@Injectable()
export class AuthenticationService {

  constructor(
    private loginResource: LoginResources
  ) { }

  login(username: string, password: string): Observable<void> {

    return this.loginResource.post({
        username, password
      })
      .map((user) => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
