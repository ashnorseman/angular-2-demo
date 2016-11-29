/**
 * Data-list
 */

import { Component, Input, OnInit } from '@angular/core';

import { DataListItem } from './data-list-item.module';


@Component({
  selector: 'ph-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input() data: DataListItem[] = [];

  constructor() { }

  ngOnInit() {
  }
}
