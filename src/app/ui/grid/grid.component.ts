/**
 * Grid
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { Data } from './models/data.model';
import { GridOption } from './models/grid-option.model';
import { Query } from './models/query.model';

import { ScrollBarWidth } from '../utils/ScrollBarWidth';


@Component({
  selector: 'ph-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Output() clickRow: EventEmitter<any> = new EventEmitter();
  @Input() options: GridOption = <GridOption>{};

  ScrollBarWidth: number = ScrollBarWidth;

  private currentPage = new Subject<number>();
  private data: Data = <Data>{};
  private selectedRows: number[] = [];

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

    this.turnPage(1);
  }

  get nextDisabled() {
    return this.options.query.currentPage === this.data.totalPages;
  }

  nextPage() {
    this.turnPage(this.options.query.currentPage + 1);
  }

  onClickRow(row: any) {
    this.clickRow.emit({ row });
  }

  get previousDisabled() {
    return this.options.query.currentPage === 1;
  }

  previousPage() {
    this.turnPage(this.options.query.currentPage - 1);
  }

  /**
   * Fetch data from the server
   */
  query() {
    const resource = this.options.resource;
    const method = this.options.method || 'query';

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
  turnPage(page: number | string) {
    page = Math.min(Math.max(1, +page || 0), this.data.totalPages || 1);

    this.currentPage.next(+page);
  }
}
