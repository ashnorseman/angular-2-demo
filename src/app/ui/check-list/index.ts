/**
 * A list of checkboxes
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckListComponent } from './check-list.component';

export * from './checkbox-item.model';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CheckListComponent
  ],
  declarations: [
    CheckListComponent
  ]
})
export class CheckListModule { }
