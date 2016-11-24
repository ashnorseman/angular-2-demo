/**
 * Animation demo
 */

import {
  Component, OnInit,
  animate, state, style, trigger, transition
} from '@angular/core';


@Component({
  selector: 'ph-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.scss'],
  animations: [
    trigger('toggleState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.2)'
      })),
      transition('inactive <=> active', animate('200ms ease-in-out'))
    ]),
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('200ms ease-in-out')
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class AnimationDemoComponent implements OnInit {
  list: number[] = [];
  toggleState: string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.list.unshift(this.list.length);
  }

  remove(index) {
    this.list.splice(index, 1);
  }

  switchToggleState() {
    this.toggleState = (this.toggleState === 'inactive')
      ? 'active'
      : 'inactive';
  }
}
