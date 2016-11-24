/**
 * Dropdown
 */

import {
  Component, ElementRef, HostListener, Input, OnInit, forwardRef,
  animate, state, style, trigger, transition,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { DropdownItem } from './dropdown-item-model';
import { isChildNode } from '../utils/isChildNode';


const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};


@Component({
  selector: 'ph-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
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
export class DropdownComponent implements ControlValueAccessor, OnInit {
  @Input('data') data: DropdownItem[];

  selected: DropdownItem = <DropdownItem>{};
  openState: string = 'closed';

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }

  // Placeholders for the callbacks which are later provided by the Control Value Accessor
  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  get value(): any {
    return this.selected.value;
  }

  set value(value: any) {
    const item = this.data.find(item => item.value === value);

    if (item === this.selected) { return; }

    this.selected = item || {};
    this.onChangeCallback(value);
  }

  writeValue(value: any): void {
    const item = this.data.find(item => item.value === value);

    if (item !== this.selected) {
      this.selected = item || {};
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
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
    this.value = item.value;
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
