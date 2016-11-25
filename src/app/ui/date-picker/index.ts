/**
 * Date-picker module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule  } from '../dropdown';
import { DatePickerComponent } from './date-picker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  exports: [
    DatePickerComponent
  ],
  declarations: [
    DatePickerComponent
  ]
})
export class DatePickerModule { }
