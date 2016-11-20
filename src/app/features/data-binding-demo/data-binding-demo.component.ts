/**
 * Data binding demo
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ButtonComponent } from '../../ui/button/button.component';


@Component({
  selector: 'ph-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent implements OnInit {
  @ViewChild('testButton') testButton: ButtonComponent;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Data-binding Demo');
  }

  openDialog(dialog): void {
    dialog.open();
  }
}
