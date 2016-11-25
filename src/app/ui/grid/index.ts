/**
 * Grid module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

import { GridCellComponent } from './grid-cell/grid-cell.component';
import { GridComponent } from './grid.component';

export * from './models/column.model';
export * from './models/data.model';
export * from './models/grid-option.model';
export * from './models/query.model';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GridComponent
  ],
  declarations: [
    GridCellComponent,
    GridComponent
  ],
  providers: [
    COMPILER_PROVIDERS
  ]
})
export class GridModule { }
