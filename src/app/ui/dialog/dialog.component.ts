/**
 * Dialog
 */

import { Component, HostBinding, HostListener, Input, OnInit, Renderer } from '@angular/core';

import { maskedClassName, scrollBarWidth } from '../constants';


@Component({
  selector: 'ph-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() title: string;

  @HostBinding('class.opened') private opened: boolean = false;

  constructor(
    private renderer: Renderer
  ) { }

  ngOnInit() {
  }

  // close the dialog
  close() {
    this.opened = false;
    this.renderer.setElementClass(document.body, maskedClassName, false);
    this.renderer.setElementStyle(document.body, 'border-right', '');
  }

  // open the dialog
  open() {
    this.opened = true;

    const overflow = document.body.clientHeight > window.innerHeight;

    this.renderer.setElementClass(document.body, maskedClassName, true);

    // prevent scrolling when modal is opened
    // add a transparent border to prevent content shifting when overflow property changes
    if (overflow) {
      this.renderer.setElementStyle(document.body, 'border-right', `${scrollBarWidth}px solid transparent`);
    }
  }

  // click on the body mask to close the dialog
  @HostListener('document:click', ['$event'])
  private onDocumentClick($event: MouseEvent) {
    if (!this.opened || $event.target !== document.body) { return; }

    this.close();
  }
}
