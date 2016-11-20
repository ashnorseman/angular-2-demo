/**
 * Http demo page
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TestHttpService } from '../../services/test-http.service';


@Component({
  selector: 'ph-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.scss']
})
export class HttpDemoComponent implements OnInit {
  getParam: string;
  postData: string;

  errorMessage: string;
  getResponse: Observable<Object>;
  postResponse: Observable<Object>;

  private getMethodStream = new Subject<string>();
  private postMethodStream = new Subject<string>();

  constructor(
    private testHttpService: TestHttpService,
    private titleService: Title
  ) {

    // debounce user input

    this.getResponse = this.getMethodStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((getParam?: string) => this.testHttpService
        .getMethod({
          param: getParam
        }));

    this.postResponse = this.postMethodStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((postData?: string) => this.testHttpService
        .postMethod({
          postData: this.postData
        }));
  }

  ngOnInit() {
    this.titleService.setTitle('Http Demo');
  }

  getMethod() {
    this.getMethodStream.next(this.getParam);
  }

  postMethod() {
    this.postMethodStream.next(this.postData);
  }

  postError() {
    this.testHttpService
      .postError()
      .subscribe(
        () => {},
        (error) => this.errorMessage = error
      );
  }
}
