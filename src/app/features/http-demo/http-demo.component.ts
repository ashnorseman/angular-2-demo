/**
 * Http demo page
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Crud, Resource } from '../../services/resource-factory';


@Component({
  selector: 'ph-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.scss']
})
export class HttpDemoComponent implements OnInit {
  httpResource: Crud;

  deleteParam: string;
  getParam: string;
  postData: string;
  putData: string;

  errorMessage: string;
  deleteResponse: Observable<Object>;
  getResponse: Observable<Object>;
  postResponse: Observable<Object>;
  putResponse: Observable<Object>;

  private deleteMethodStream = new Subject<string>();
  private getMethodStream = new Subject<string>();
  private postMethodStream = new Subject<string>();
  private putMethodStream = new Subject<string>();

  constructor(
    private resource: Resource,
    private titleService: Title
  ) {
    this.httpResource = this.resource.create('/api/test', {
      postError: {
        url: '/api/test/error',
        method: 'post'
      }
    });

    // debounce user input

    this.getResponse = this.getMethodStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((getParam?: string) => this.httpResource.query({
          param: getParam
        }));

    this.postResponse = this.postMethodStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((postData?: string) => this.httpResource.post({
          postData: this.postData
        }));

    this.putResponse = this.putMethodStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((postData?: string) => this.httpResource.put({
          postData: this.postData
        }));

    this.deleteResponse = this.deleteMethodStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((deleteParam?: string) => this.httpResource.delete({
          param: deleteParam
        }));
  }

  ngOnInit() {
    this.titleService.setTitle('Http Demo');
  }

  deleteMethod() {
    this.deleteMethodStream.next(this.deleteParam);
  }

  getMethod() {
    this.getMethodStream.next(this.getParam);
  }

  postError() {
    this.httpResource['postError']()
      .subscribe(
        () => {},
        (error) => this.errorMessage = error
      );
  }

  postMethod() {
    this.postMethodStream.next(this.postData);
  }

  putMethod() {
    this.putMethodStream.next(this.putData);
  }
}
