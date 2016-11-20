/**
 * Pipe demo
 */

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ph-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {
  currency: number = 998;
  date: Date = new Date();
  decimal: number = 1;
  percent: number = 0.6666667;
  text: string = 'uppercase text';

  constructor() { }

  ngOnInit() {
  }
}
