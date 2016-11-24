/**
 * UI components
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DropdownComponent } from './dropdown/dropdown.component';
import { GridComponent } from './grid/grid.component';
import { GridCellComponent } from './grid/grid-cell/grid-cell.component';
import { DialogComponent } from './dialog/dialog.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltip/tooltip.component';

import { TooltipDirective } from './tooltip/tooltip.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    DialogComponent,
    DropdownComponent,
    GridCellComponent,
    GridComponent,
    TooltipComponent,
    TabsComponent,
    TooltipDirective
  ],
  entryComponents: [
    TooltipComponent
  ],
  exports: [
    GridComponent,
    DialogComponent,
    DropdownComponent,
    TabsComponent,
    TooltipDirective
  ],
  providers: [
    COMPILER_PROVIDERS
  ]
})
export class UIModule { }
