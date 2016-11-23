/**
 * Dropdown
 */

import {
  Component, ElementRef, HostListener, Input, OnInit,
  animate,
  state,
  style,
  trigger,
  transition
} from '@angular/core';

import { DropdownItem } from './dropdown-item-model';
import { isChildNode } from '../utils/isChildNode';


@Component({
  selector: 'ph-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [
    trigger('openState', [
      state('closed', style({
        height: '0'
      })),
      state('opened', style({
        height: '*'
      })),
      transition('closed <=> opened', animate('200ms ease-in-out'))
    ])
  ]
})
export class DropdownComponent implements OnInit {
  @Input('data') data: DropdownItem[];

  openState: string = 'closed';
  selected: DropdownItem = <DropdownItem>{};

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }


  /**
   * Close the dropdown
   */
  close() {
    this.openState = 'closed';
  }


  /**
   * Select an item
   * @param item
   */
  select(item: DropdownItem) {
    this.selected = item;
    this.close();
  }


  /**
   * Open / close
   */
  toggle() {
    this.openState = (this.openState === 'opened') ? 'closed' : 'opened';
  }


  /**
   * Click on the document to close the dropdown
   * @param $event
   */
  @HostListener('document:click', ['$event'])
  private onClickDocument($event) {
    if (isChildNode($event.target, this.elementRef.nativeElement)) { return; }

    this.close();
  }
}
