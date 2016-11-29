/**
 * UI components
 */

import { NgModule } from '@angular/core';

import { ActionTitleModule } from './action-title';
import { CheckListModule } from './check-list';
import { DataListModule } from './data-list';
import { DatePickerModule } from './date-picker';
import { DialogModule } from './dialog';
import { DropdownModule } from './dropdown';
import { GridModule } from './grid';
import { SearchModule } from './search';
import { SelectionBarModule } from './selection-bar';
import { SideBarModule } from './side-bar';
import { TabModule } from './tabs';
import { ToolTipModule } from './tooltip';
import { ValidatorModule } from './validators';


const modules = [
  ActionTitleModule,
  CheckListModule,
  DataListModule,
  DatePickerModule,
  DialogModule,
  DropdownModule,
  GridModule,
  SearchModule,
  SelectionBarModule,
  SideBarModule,
  TabModule,
  ToolTipModule,
  ValidatorModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class UIModule { }
