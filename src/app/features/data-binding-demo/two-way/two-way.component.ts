/**
 * Two-way data-binding
 */

import { Component, OnInit } from '@angular/core';

import { DataListItem } from '../../../ui/data-list';

@Component({
  selector: 'ph-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent implements OnInit {
  dataList: DataListItem[] = [{
    title: 'Alarm type',
    detail: 'Node loss'
  }, {
    title: 'Level',
    detail: 'High'
  }];

  constructor() { }

  ngOnInit() {
  }

  openDialog(dialog) {
    dialog.open();
  }
}
