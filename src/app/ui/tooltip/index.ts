/**
 * Tooltip module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective
  ],
  entryComponents: [
    TooltipComponent
  ],
  declarations: [
    TooltipComponent,
    TooltipDirective
  ]
})
export class ToolTipModule { }
