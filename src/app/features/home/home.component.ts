/**
 * Home page
 */

import { Component, OnInit } from '@angular/core';

import { Tab } from '../../ui/tabs';


@Component({
  selector: 'ph-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tabs: Tab[] = [{
    router: 'data-binding-demo',
    text: 'Data binding'
  }, {
    router: 'form-demo',
    text: 'Form'
  }, {
    router: 'resources-demo',
    text: 'Http'
  }, {
    router: 'pipe-demo',
    text: 'Pipes'
  }, {
    router: 'animation-demo',
    text: 'Animation'
  }, {
    router: 'charts-demo',
    text: 'Charts'
  }];

  toolTipDemo: string = 'Tooltip demo';

  constructor() { }

  ngOnInit() {
  }
}
