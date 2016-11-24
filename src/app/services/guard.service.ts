/**
 * Auth guard
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) { return true; }

    this.router.navigate(['/login']);

    return false;
  }
}
