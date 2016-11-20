/**
 * Tabs
 */

import { Component, Input, OnInit } from '@angular/core';

import { Tab } from './tab';


@Component({
  selector: 'ph-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input('tabs') tabs: Tab[];

  constructor() { }

  ngOnInit() {
  }
}
