/**
 * Date-picker
 */

import {
  Component, ElementRef, HostListener, OnInit, Renderer, forwardRef,
  animate, state, style, trigger, transition, Input
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AbstractToggleComponent } from '../utils/AbstractToggleComponent';
import { isChildNode } from '../utils/isChildNode';
import { DropdownItem } from '../dropdown';


const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent)
};

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthList = monthNames.map((name, i) => ({
  text: name,
  value: i
}));

const yearList = (function () {
  const result: DropdownItem[] = [];
  let start = 2000;
  let end = 2020;

  while (start++ <= end) {
    result.push(<DropdownItem>{
      text: `${start}`,
      value: start
    })
  }

  return result;
}());


@Component({
  selector: 'ph-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
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
export class DatePickerComponent extends AbstractToggleComponent implements ControlValueAccessor, OnInit {
  @Input() placeholder: string = '';

  private currentMonth: number;
  private currentYear: number;
  private dateRange: Date[] = [];
  private dateValue: Date;
  private monthList: DropdownItem[] = <DropdownItem[]>monthList;
  private weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  private yearList: DropdownItem[] = <DropdownItem[]>yearList;

  get value(): Date {
    return this.dateValue;
  }

  set value(value: Date) {
    if (value === this.dateValue) { return; }

    this.writeValue(value);
    this.onChangeCallback(value);
  }

  constructor(
    elementRef: ElementRef,
    renderer: Renderer
  ) {
    super(elementRef, renderer);
  }

  ngOnInit() {
  }

  // create the date range using current date
  createDateRange(year: number, month: number) {
    const monthStart: number = +new Date(year, month, 1).valueOf();
    let showDate = new Date(monthStart - 1000 * 60 * 60 * 24 * new Date(monthStart).getDay());
    let i = 0;

    const range = [];

    while (i++ < 42) {
      range.push({
        current: this.dateValue && (showDate.valueOf() === this.dateValue.valueOf()),
        outOfRange: showDate.getMonth() !== month,
        value: showDate
      });

      showDate = new Date(showDate.valueOf() + 1000 * 60 * 60 * 24);
    }

    this.dateRange = range;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setValue(date: Date) {
    this.value = date;
    this.close();
  }

  // switch to a month before / after the current month
  switchMonth(delta: number) {
    const targetMonth = this.currentMonth + delta;

    if (targetMonth < 0) {

      // last year
      this.currentMonth = 11;
      this.currentYear -= 1;
    } else if (targetMonth > 11) {

      // next year
      this.currentMonth = 0;
      this.currentYear += 1;
    } else {
      this.currentMonth = targetMonth;
    }

    this.createDateRange(this.currentYear, this.currentMonth);
  }

  // set date value
  writeValue(date: Date) {

    if (date) {
      this.dateValue = new Date(date.setHours(0, 0, 0, 0));
    }

    // defaults to current date
    !date && (date = new Date());

    // update calendar
    if (date >= this.dateRange[0] && date <= this.dateRange[41]) { return; }

    const month = date.getMonth();
    const year = date.getFullYear();

    this.currentMonth = month;
    this.currentYear = year;

    this.createDateRange(year, month);
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
