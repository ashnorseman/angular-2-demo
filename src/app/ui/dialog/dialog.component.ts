/**
 * Dialog
 */

import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

import { ScrollBarWidth } from '../utils/ScrollBarWidth';


@Component({
  selector: 'ph-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @HostBinding('class.opened')
  private opened: boolean = false;

  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

  // close the dialog
  close(): void {
    this.opened = false;
    document.body.classList.remove('modal-masked');
    document.body.style.borderRight = '';
  }

  // open the dialog
  open(): void {
    this.opened = true;

    const overflow = document.body.clientHeight > window.innerHeight;

    document.body.classList.add('modal-masked');

    // prevent scrolling when modal is opened
    // add a transparent border to prevent content shifting when overflow property changes
    if (overflow) {
      document.body.style.borderRight = `${ScrollBarWidth}px solid transparent`;
    }
  }

  // click on the body mask to close the dialog
  @HostListener('document:click', ['$event'])
  private onDocumentClick($event: MouseEvent): void {
    if (!this.opened || $event.target !== document.body) { return; }

    this.close();
  }
}
