/**
 * Root component
 */

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ph-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
