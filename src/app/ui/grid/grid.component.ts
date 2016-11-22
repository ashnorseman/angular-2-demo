/**
 * Grid
 */

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Data } from './models/data.model';
import { GridOption } from './models/grid-option.model';
import { Query } from './models/query.model';
import { ScrollBarWidth } from '../utils/ScrollBarWidth';
import { Subject } from "rxjs";


@Component({
  selector: 'ph-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input('options') options: GridOption = <GridOption>{};

  @Output('onClickRow') onClickRow: EventEmitter<any> = new EventEmitter();

  ScrollBarWidth: number = ScrollBarWidth;

  data: Data = <Data>{};
  private selectedRows: number[] = [];
  private currentPage = new Subject<number>();

  constructor() { }

  ngOnInit() {
    if (!this.options.query) {
      this.options.query = new Query();
    }

    this.currentPage
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(currentPage => {
        this.options.query.currentPage = currentPage;
        this.query();
      });

    this.query();
  }

  clickRow(row: any) {
    this.onClickRow.emit({ row });
  }


  previousPage() {
    this.currentPage.next(this.options.query.currentPage - 1);
  }


  nextPage() {
    this.currentPage.next(this.options.query.currentPage + 1);
  }


  /**
   * Fetch data from the server
   */
  query() {
    const resource = this.options.resource;
    const method = this.options.method;

    if (resource && resource[method]) {
      resource[method](this.options.query)
        .subscribe(
          (res) => this.data = res
        );
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


  /**
   * Go to a page
   * @param page
   */
  turnPage(page: number) {
    this.currentPage.next(page);
  }
}
