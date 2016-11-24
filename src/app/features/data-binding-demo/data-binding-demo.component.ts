/**
 * Data binding demo
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Crud, Resource } from '../../services/resource-factory';


@Component({
  selector: 'ph-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent implements OnInit {
  gridOptions: any;
  gridResource: Crud;

  constructor(
    private resource: Resource,
    private titleService: Title
  ) {
    this.gridResource = this.resource.create('/api/grid-resources');
  }

  ngOnInit(): void {
    this.titleService.setTitle('Data-binding Demo');

    this.gridOptions = {
      selectable: true,
      resource: this.gridResource,

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
        template: '<button type="button" (click)="column.edit(data); $event.stopPropagation();">Edit</button>',
        edit: this.edit,
        align: 'center'
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
