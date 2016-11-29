/**
 * Search with dropdown
 */

import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ph-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string = '';

  keyword: string;

  constructor() { }

  ngOnInit() {
  }
}
