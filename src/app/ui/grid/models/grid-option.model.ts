/**
 * Grid option
 */

import { Column } from './column.model';
import { Query } from './query.model';

import { Crud } from '../../../services/resource-factory';


export class GridOption {
  columns: Column[] = [];

  resource?: Crud;
  method?: string = 'query';
  query?: Query = <Query>{};

  selectable: boolean = false;
}
