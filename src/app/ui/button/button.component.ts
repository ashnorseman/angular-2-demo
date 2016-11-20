/**
 * Button
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'ph-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;

  @Output() onButtonClick: EventEmitter<ButtonComponent> = new EventEmitter<ButtonComponent>();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.onButtonClick.emit(this);
  }
}
