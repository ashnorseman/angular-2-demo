/**
 * Min validator
 */

import { Directive, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[ngModel][phMin]',
  providers: [
    {
      multi: true,
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinDirective)
    }
  ]
})
export class MinDirective {
  @Input() phMin: number | Date;

  constructor() { }

  validate(control: FormControl) {
    const min = +this.phMin;

    if (!isFinite(min)) return null;

    if (control.value < min) {
      return {
        validateMin: {
          valid: false
        }
      };
    }

    return null;
  }
}
