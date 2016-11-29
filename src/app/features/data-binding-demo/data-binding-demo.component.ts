/**
 * Data binding demo
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Column, GridOption } from '../../ui/grid';
import { GridResources } from '../../services/resources/grid.resource';


@Component({
  selector: 'ph-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss'],
  providers: [GridResources]
})
export class DataBindingDemoComponent implements OnInit {
  gridOptions: GridOption;

  constructor(
    private titleService: Title,
    private gridResource: GridResources
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Data-binding Demo');

    this.gridOptions = <GridOption>{
      selectable: true,
      resource: this.gridResource,

      columns: <Column[]>[{
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
        template: '<button type="button" class="button-clear" (click)="column.edit(data); $event.stopPropagation();"><i class="iconfont icon-edit"></i> Edit</button>',
        align: 'center',
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
