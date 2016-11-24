/**
 * The module to be bootstrapped
 */

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FeaturesModule } from './features/features.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [

    // Core modules
    BrowserModule,  // for browser apps
    HttpModule,

    // Feature module
    FeaturesModule,

    // Routing
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
