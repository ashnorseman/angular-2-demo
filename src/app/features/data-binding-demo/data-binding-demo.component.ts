/**
 * Data binding demo
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TestHttpService } from '../../services/test-http.service';


@Component({
  selector: 'ph-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent implements OnInit {

  gridOptions: any;

  constructor(
    private titleService: Title,
    private testHttpService: TestHttpService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Data-binding Demo');

    this.gridOptions = {
      selectable: true,
      resource: this.testHttpService,
      method: 'getUsers',

      columns: [{
        text: 'Avatar',
        template: '<img class="data-grid-image" [src]="data.avatar">'
      }, {
        field: 'name',
        text: 'Name'
      }, {
        field: 'dob',
        text: 'Date of birth'
      }, {
        field: 'height',
        text: 'Height',
        align: 'right'
      }, {
        text: 'Height',
        template: '<button type="button" (click)="column.edit(data); $event.stopPropagation();">Edit</button>',
        edit: this.edit
      }]
    };
  }

  clickRow($event) {
    alert(JSON.stringify($event.row));
  }

  edit(data) {
    alert(`Editing ${data.name}`);
  }

  openDialog(dialog) {
    dialog.open();
  }
}
