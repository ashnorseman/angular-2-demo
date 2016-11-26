/**
 * Grid option
 */

import { Column } from './column.model';
import { Query } from './query.model';


export class GridOption {
  columns: Column[] = [];

  resource?: any;
  method?: string = 'query';
  query?: Query = <Query>{};

  selectable: boolean = false;
}
