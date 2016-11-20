/**
 * UI components
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
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
    TabsComponent,
    TooltipComponent,

    TooltipDirective
  ],
  entryComponents: [TooltipComponent],
  exports: [
    ButtonComponent,
    DialogComponent,
    TabsComponent,

    TooltipDirective
  ]
})
export class UIModule { }
