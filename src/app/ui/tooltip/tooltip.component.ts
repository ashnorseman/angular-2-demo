/**
 * Tooltip
 */

import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ph-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {
  @Input() message: string;

  @HostBinding('style.left') @Input('x') x: string = '0';
  @HostBinding('style.top') @Input('y') y: string = '0';

  constructor() { }

  ngOnInit() {
  }
}
