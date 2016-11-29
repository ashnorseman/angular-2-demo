/**
 * Data binding demo
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DropdownItem } from '../../ui/dropdown';
import { Tab } from '../../ui/tabs';


@Component({
  selector: 'ph-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent implements OnInit {
  dateFrom: Date;
  dateTo: Date;

  dropdownData: DropdownItem[] = [{
    value: 'a',
    text: 'Group A'
  }, {
    value: 'b',
    text: 'Group B'
  }];

  tabs: Tab[] = [{
    router: 'two-way',
    text: 'Two way data binding'
  }, {
    router: 'grid',
    text: 'Grid demo'
  }];

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Data-binding Demo');
  }
}
