/**
 * Dropdown module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownComponent } from './dropdown.component';

export * from './dropdown-item.model';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdownComponent
  ],
  declarations: [
    DropdownComponent
  ]
})
export class DropdownModule { }
