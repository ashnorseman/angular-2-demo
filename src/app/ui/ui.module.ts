/**
 * UI components
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COMPILER_PROVIDERS } from '@angular/compiler';

import { ButtonComponent } from './button/button.component';
import { GridComponent } from './grid/grid.component';
import { GridCellComponent } from './grid/grid-cell/grid-cell.component';
import { DialogComponent } from './dialog/dialog.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltip/tooltip.component';

import { TooltipDirective } from './tooltip/tooltip.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ButtonComponent,
    DialogComponent,
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
    ButtonComponent,
    GridComponent,
    DialogComponent,
    TabsComponent,
    TooltipDirective
  ],
  providers: [
    COMPILER_PROVIDERS
  ]
})
export class UIModule { }
