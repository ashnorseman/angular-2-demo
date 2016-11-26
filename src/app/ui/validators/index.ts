/**
 * Validator module
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailDirective } from './email.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EmailDirective
  ],
  declarations: [
    EmailDirective
  ]
})
export class ValidatorModule { }

