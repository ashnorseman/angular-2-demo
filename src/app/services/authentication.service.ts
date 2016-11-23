/**
 * Authentication service
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Crud, Resource } from './resource-factory';


@Injectable()
export class AuthenticationService {
  private loginResource: Crud;

  constructor(
    private resource: Resource
  ) {
    this.loginResource = this.resource.create('/api/authenticate');
  }

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
