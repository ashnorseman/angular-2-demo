/**
 * Routing config of form demo page
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

import { GuardService } from '../../services/guard.service';

import { animationDemoRouting } from '../animation-demo/animation-demo-routing';
import { chartsDemoRouting } from '../charts-demo/charts-demo-routing';
import { dataBindingDemoRouting } from '../data-binding-demo/data-binding-demo-routing';
import { formDemoRouting } from '../form-demo/form-demo-routing';
import { httpDemoRouting } from '../http-demo/http-demo-routing';
import { pipeDemoRouting } from '../pipe-demo/pipe-demo-routing';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [GuardService],
  children: [
    ...animationDemoRouting,
    ...chartsDemoRouting,
    ...dataBindingDemoRouting,
    ...formDemoRouting,
    ...httpDemoRouting,
    ...pipeDemoRouting
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
