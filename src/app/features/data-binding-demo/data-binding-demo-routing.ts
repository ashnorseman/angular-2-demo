/**
 * Routing config of data-binding demo page
 */

import { DataBindingDemoComponent } from './data-binding-demo.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { GridDemoComponent } from './grid/grid-demo.component';


export const dataBindingDemoRouting = [{
  path: 'data-binding-demo',
  component: DataBindingDemoComponent,
  children: [{
    path: 'two-way',
    component: TwoWayComponent
  }, {
    path: 'grid',
    component: GridDemoComponent
  }, {
    path: '',
    redirectTo: 'two-way',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: 'data-binding-demo',
  pathMatch: 'full'
}];
