/**
 * Data-list
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataListComponent } from './data-list.component';

export * from './data-list-item.module';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DataListComponent
  ],
  declarations: [
    DataListComponent
  ]
})
export class DataListModule { }
