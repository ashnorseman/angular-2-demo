import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ph-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDialog(dialog) {
    dialog.open();
  }
}
