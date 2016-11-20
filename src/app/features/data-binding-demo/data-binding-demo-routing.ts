/**
 * Routing config of data-binding demo page
 */

import { DataBindingDemoComponent } from './data-binding-demo.component';


export const dataBindingDemoRouting = [{
  path: 'data-binding-demo',
  component: DataBindingDemoComponent
}, {
  path: '',
  redirectTo: 'data-binding-demo',
  pathMatch: 'full'
}];
