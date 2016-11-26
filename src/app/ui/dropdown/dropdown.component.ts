/**
 * Dropdown
 */

import {
  Component, ElementRef, HostListener, Input, OnInit, Renderer ,forwardRef,
  animate, state, style, trigger, transition
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractToggleComponent } from '../utils/AbstractToggleComponent';
import { isChildNode } from '../utils/isChildNode';
import { DropdownItem } from './dropdown-item.model';


const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent)
};


@Component({
  selector: 'ph-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  animations: [
    trigger('openState', [
      state('closed', style({
        opacity: '0',
        transform: 'translateY(-50%)',
        zIndex: '-1'
      })),
      state('opened', style({
        opacity: '1',
        transform: 'translateY(0)'
      })),
      transition('closed <=> opened', animate('200ms ease-in-out'))
    ])
  ]
})
export class DropdownComponent extends AbstractToggleComponent implements ControlValueAccessor, OnInit {
  @Input() data: DropdownItem[] = <DropdownItem[]>[];

  private selected: DropdownItem = <DropdownItem>{};

  constructor(
    elementRef: ElementRef,
    renderer: Renderer
  ) {
    super(elementRef, renderer);
  }

  ngOnInit() {
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  /**
   * Select an item
   * @param item
   */
  select(item: DropdownItem) {
    this.value = item.value;
    this.close();
  }

  get value(): any {
    return this.selected.value;
  }

  set value(value: any) {
    if (value === this.value) { return; }

    this.writeValue(value);
    this.onChangeCallback(value);
  }

  writeValue(value: any) {
    const item = this.data.find(i => i.value === value);

    if (item !== this.selected) {
      this.selected = item || <DropdownItem>{};
    }
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

  // Placeholders for the callbacks which are later provided by the Control Value Accessor
  private onChangeCallback: (_: any) => void = () => {};
  private onTouchedCallback: () => void = () => {};
}
