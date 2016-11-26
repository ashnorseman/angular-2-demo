/**
 * Email validator
 */

import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[ngModel][phEmail]',
  providers: [
    {
      multi: true,
      provide: NG_VALIDATORS,
      useValue: validateEmail
    }
  ]
})
export class EmailDirective { }


export function validateEmail(control: FormControl) {
  let EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  return EMAIL_REGEXP.test(control.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}
