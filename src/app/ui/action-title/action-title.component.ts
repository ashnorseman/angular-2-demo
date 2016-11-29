/**
 * Action title
 */

import { Component, Input,OnInit } from '@angular/core';


@Component({
  selector: 'ph-action-title',
  templateUrl: './action-title.component.html',
  styleUrls: ['./action-title.component.scss']
})
export class ActionTitleComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }
}
