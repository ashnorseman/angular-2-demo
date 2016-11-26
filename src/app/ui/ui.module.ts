/**
 * UI components
 */

import { NgModule } from '@angular/core';

import { CheckListModule } from './check-list';
import { DatePickerModule } from './date-picker';
import { DialogModule } from './dialog';
import { DropdownModule } from './dropdown';
import { GridModule } from './grid';
import { TabModule } from './tabs';
import { ToolTipModule } from './tooltip';
import { ValidatorModule } from './validators';


const modules = [
  CheckListModule,
  DatePickerModule,
  DialogModule,
  DropdownModule,
  GridModule,
  TabModule,
  ToolTipModule,
  ValidatorModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class UIModule { }
