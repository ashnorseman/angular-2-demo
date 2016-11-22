/**
 * Grid cell
 */

import {
  Component, ComponentRef, NgModule, Input, ViewContainerRef,
  OnInit, AfterViewInit, OnChanges, OnDestroy
} from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler';

import { Column } from '../models/column.model';


@Component({
  selector: 'ph-grid-cell',
  template: '',
  styleUrls: ['./grid-cell.component.scss']
})
export class GridCellComponent implements AfterViewInit, OnChanges, OnInit, OnDestroy {
  @Input('column') column: Column = <Column>{};
  @Input('data') data: any = {};

  private _initialized: boolean;
  private componentRef: ComponentRef<any>;

  constructor(
    private compiler: RuntimeCompiler,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._initialized = true;
    this.refreshContent();
  }

  ngOnChanges() {
    if (this._initialized) { return; }
    this.refreshContent();
  }

  ngOnDestroy() {
    this.destroyOldComponent();
  }

  private destroyOldComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  private refreshContent() {
    const data = this.data;

    const template = this.column.field
      ? `{{data.${this.column.field}}}`
      : this.column.template || '';

    @Component({
      selector: 'ph-grid-cell-content',
      template: template,
    })
    class GridCellContentComponent {
      @Input() public data: any;
    }

    @NgModule({
      imports: [],
      declarations: [
        GridCellContentComponent
      ],
    })
    class GridCellModule {}

    this.compiler
      .compileModuleAndAllComponentsAsync(GridCellModule)
      .then((moduleWithFactories) => {
        const factory = moduleWithFactories.componentFactories.find((f) => {
          return f.componentType === GridCellContentComponent;
        });

        this.destroyOldComponent();

        this.componentRef = this.viewContainerRef.createComponent(factory);

        let component: GridCellContentComponent = this.componentRef.instance;

        component.data = data;
      });
  }
}
