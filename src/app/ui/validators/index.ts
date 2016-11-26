/**
 * Validator module
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailDirective } from './email.directive';
import { MaxDirective } from './max.directive';
import { MinDirective } from './min.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EmailDirective,
    MaxDirective,
    MinDirective
  ],
  declarations: [
    EmailDirective,
    MaxDirective,
    MinDirective
  ]
})
export class ValidatorModule { }
