/**
 * Tooltip
 */

import { Component, Input, OnInit, HostBinding } from '@angular/core';


@Component({
  selector: 'ph-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input('message') message: string;

  @HostBinding('style.left') @Input('x') x: string = '0';
  @HostBinding('style.top') @Input('y') y: string = '0';

  constructor() { }

  ngOnInit() {
  }
}
