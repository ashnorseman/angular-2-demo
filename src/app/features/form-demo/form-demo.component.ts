/**
 * Form demo
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { DropdownItem } from '../../ui/dropdown';
import { CheckboxItem } from '../../ui/check-list';


@Component({
  selector: 'ph-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {

  dropdownData: DropdownItem[] = [{
    text: 'Male',
    value: 1
  }, {
    text: 'Female',
    value: 2
  }];

  interests: CheckboxItem[] = [{
    text: 'Art',
    value: 'art'
  }, {
    text: 'Music',
    value: 'music'
  }];

  minDob: number = new Date(new Date().setDate(1)).setHours(0, 0, 0, 0);
  now: Date = new Date();
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

      if (start && end && (start > end)) {
        return {
          mismatchStartEnd: true
        };
      }
    };
  }
}
