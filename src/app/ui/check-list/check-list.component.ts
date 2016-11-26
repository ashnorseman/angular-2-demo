/**
 * Check list
 */

import { Component, Input, OnInit, forwardRef } from '@angular/core';

import { CheckboxItem } from './checkbox-item.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckListComponent)
};


@Component({
  selector: 'ph-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CheckListComponent implements ControlValueAccessor, OnInit {
  @Input() data: CheckboxItem[] = <CheckboxItem[]>[];

  private checked: any[] = [];

  get value(): any[] {
    return this.checked || [];
  }

  set value(value: any[]) {
    this.writeValue(value);
    this.onChangeCallback(value);
  }

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  // Add or remove an item
  toggle(value): any {
    const index = this.checked.indexOf(value);

    if (index === -1) {
      this.checked.push(value);
    } else {
      this.checked.splice(index, 1);
    }

    this.value = this.checked;
  }

  writeValue(value: any[]) {
    this.checked = value || [];
  }

  // Placeholders for the callbacks which are later provided by the Control Value Accessor
  private onChangeCallback: (_: any) => void = () => {};
  private onTouchedCallback: () => void = () => {};
}
