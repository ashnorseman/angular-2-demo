/**
 * Grid
 */

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GridOption } from './models/grid-option.model';
import { ScrollBarWidth } from '../utils/ScrollBarWidth';


@Component({
  selector: 'ph-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input('options') options: GridOption = <GridOption>{};

  @Output('onClickRow') onClickRow: EventEmitter<any> = new EventEmitter();

  ScrollBarWidth: number = ScrollBarWidth;

  data: Observable<any[]>;
  private selectedRows: number[] = [];

  constructor() { }

  ngOnInit() {
    this.query();
  }

  clickRow(row: any) {
    this.onClickRow.emit({ row });
  }


  /**
   * Fetch data from the server
   */
  query() {
    const resource = this.options.resource;
    const method = this.options.method;

    if (resource && resource[method]) {
      this.data = resource[method]();
    }
  }


  /**
   * select / un-select a row
   * @param index
   */
  toggleSelect(index: number) {
    const findIndex = this.selectedRows.findIndex(i => i === index);

    if (findIndex === -1) {
      this.selectedRows.push(index);
    } else {
      this.selectedRows.splice(findIndex, 1);
    }
  }
}
