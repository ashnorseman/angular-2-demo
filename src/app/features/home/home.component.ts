/**
 * Home page
 */

import { Component, OnInit } from '@angular/core';

import { Tab } from '../../ui/tabs/tab.model';


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
    router: 'http-demo',
    text: 'Http'
  }, {
    router: 'pipe-demo',
    text: 'Pipes'
  }, {
    router: 'animation-demo',
    text: 'Animation'
  }];

  toolTipDemo: string = 'Tooltip demo';

  constructor() { }

  ngOnInit() {
  }
}
