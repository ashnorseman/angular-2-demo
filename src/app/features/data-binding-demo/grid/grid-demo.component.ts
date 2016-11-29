import { Component, OnInit } from '@angular/core';

import { Column, GridOption } from '../../../ui/grid';
import { GridResources } from '../../../services/resources/grid.resource';


@Component({
  selector: 'ph-grid-demo',
  templateUrl: './grid-demo.component.html',
  styleUrls: ['./grid-demo.component.scss'],
  providers: [GridResources]
})
export class GridDemoComponent implements OnInit {
  gridOptions: GridOption = <GridOption>{
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

  constructor(
    private gridResource: GridResources
  ) { }

  ngOnInit() {
  }

  clickRow($event) {
    alert(JSON.stringify($event.row));
  }

  edit(data) {
    alert(`Editing ${data.name}`);
  }
}
