/**
 * Side-bar
 */

import { Component, Input, OnInit } from '@angular/core';

import { SideBarItem } from './side-bar-item.model';


@Component({
  selector: 'ph-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() items: SideBarItem[];

  constructor() { }

  ngOnInit() {
  }
}
