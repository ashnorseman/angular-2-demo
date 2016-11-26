/**
 * Grid option
 */

import { Column } from './column.model';
import { Query } from './query.model';

import { Resource } from '../../../services/resource';


export class GridOption {
  columns: Column[] = [];

  resource?: Resource;
  method?: string = 'query';
  query?: Query = <Query>{};

  selectable: boolean = false;
}
