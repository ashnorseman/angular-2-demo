/**
 * All features
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../ui/ui.module';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,

    HomeModule,
    LoginModule
  ],
  declarations: [
    AnimationDemoComponent,
    DataBindingDemoComponent,
    FormDemoComponent,
    HttpDemoComponent,
    PipeDemoComponent
  ]
})
export class FeaturesModule { }
