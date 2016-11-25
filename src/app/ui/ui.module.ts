/**
 * UI components
 */

import { NgModule } from '@angular/core';

import { DialogModule } from './dialog';
import { DropdownModule } from './dropdown';
import { GridModule } from './grid';
import { TabModule } from './tabs';
import { ToolTipModule } from './tooltip';


const modules = [
  DialogModule,
  DropdownModule,
  GridModule,
  TabModule,
  ToolTipModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class UIModule { }
