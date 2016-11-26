/**
 * Login
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Resource } from '../resource';


@Injectable()
export class LoginResources extends Resource {

  constructor(
    http: Http
  ) {
    super(http);

    this.url = '/api/authenticate';
  }
}
