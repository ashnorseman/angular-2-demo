/**
 * Form demo
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'ph-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {
  timeControls: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Form Demo');

    this.timeControls = this.formBuilder.group({
      start: ['', Validators.required],
      end: ['', Validators.required]
    }, {
      validator: this.timeRangeValidator()
    });
  }

  registerUser(form: NgForm): void {
    console.log(form);
  }

  timeRangeValidator() {
    return (group): {[key: string]: any} => {
      let start = group.controls['start'].value;
      let end = group.controls['end'].value;

      if (start && end && (start >= end)) {
        return {
          mismatchStartEnd: true
        };
      }
    }
  }
}
