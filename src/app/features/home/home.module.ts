/**
 * Home page
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from '../../ui/ui.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    UIModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
