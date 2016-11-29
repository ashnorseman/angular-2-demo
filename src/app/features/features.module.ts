/**
 * All features
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { UIModule } from '../ui/ui.module';

import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { ChartsDemoComponent } from './charts-demo/charts-demo.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { GridDemoComponent } from './data-binding-demo/grid/grid-demo.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { TwoWayComponent } from './data-binding-demo/two-way/two-way.component';

import { Resource } from '../services/resources/resource';
import { AuthenticationService } from '../services/authentication.service';
import { LoginResources } from '../services/resources/login.resource';
import { GuardService } from '../services/guard.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    HomeModule,
    LoginModule,
    UIModule
  ],
  declarations: [
    AnimationDemoComponent,
    ChartsDemoComponent,
    DataBindingDemoComponent,
    FormDemoComponent,
    GridDemoComponent,
    HttpDemoComponent,
    PipeDemoComponent,
    TwoWayComponent
  ],
  providers: [
    Resource,
    AuthenticationService,
    GuardService,
    LoginResources
  ]
})
export class FeaturesModule { }
