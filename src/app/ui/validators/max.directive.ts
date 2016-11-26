/**
 * Max validator
 */

import { Directive, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[ngModel][phMax]',
  providers: [
    {
      multi: true,
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxDirective)
    }
  ]
})
export class MaxDirective {
  @Input() phMax: number | Date;

  constructor() { }

  validate(control: FormControl) {
    const max = +this.phMax;

    if (!isFinite(max)) return null;

    if (control.value > max) {
      return {
        validateMax: {
          valid: false
        }
      };
    }

    return null;
  }
}
