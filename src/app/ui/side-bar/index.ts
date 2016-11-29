/**
 * Side-bar
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideBarComponent } from './side-bar.component';

export * from './side-bar-item.model';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent
  ],
  declarations: [
    SideBarComponent
  ]
})
export class SideBarModule { }
