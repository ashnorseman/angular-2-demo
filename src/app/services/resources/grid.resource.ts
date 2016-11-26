/**
 * Grid
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Resource } from '../resource';


@Injectable()
export class GridResources extends Resource {

  constructor(
    private http: Http
  ) {
    super(http);

    this.url = '/api/grid-resources';
  }
}
