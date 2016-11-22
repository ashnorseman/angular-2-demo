/**
 * Grid option
 */

import { Column } from './column.model';


export class GridOption {
  columns: Column[] = [];
  selectable: boolean = false;
  resource?: Function;
  method?: string;
}
