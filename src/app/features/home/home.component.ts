/**
 * Home page
 */

import { Component, OnInit } from '@angular/core';

import { SideBarItem } from '../../ui/side-bar';


@Component({
  selector: 'ph-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sideBarNav: SideBarItem[] = <SideBarItem[]>[{
    badge: 2,
    icon: 'location-fill',
    router: 'data-binding-demo',
    text: 'Data binding'
  }, {
    icon: 'rank-fill',
    router: 'form-demo',
    text: 'Form'
  }, {
    icon: 'form-fill',
    router: 'resources-demo',
    text: 'Http'
  }, {
    icon: 'notice-fill',
    router: 'pipe-demo',
    text: 'Pipes'
  }, {
    icon: 'settings',
    router: 'animation-demo',
    text: 'Animation'
  }, {
    icon: 'rank-fill',
    router: 'charts-demo',
    text: 'Charts'
  }];

  toolTipDemo: string = 'Tooltip demo';

  constructor() { }

  ngOnInit() {
  }
}
