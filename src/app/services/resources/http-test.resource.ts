/**
 * Http test
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Resource } from '../resource';


@Injectable()
export class HttpTestResources extends Resource {

  constructor(
    http: Http
  ) {
    super(http);

    this.url = '/api/test';

    this.setAllActions({
      postError: {
        url: '/api/test/error',
        method: 'post'
      }
    });
  }
}
