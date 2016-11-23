/**
 * The module to be bootstrapped
 */

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeaturesModule } from './features/features.module';
import { UIModule } from './ui/ui.module';

import { Resource } from './services/resource-factory';
import { AuthenticationService } from './services/authentication.service';
import { GuardService } from './services/guard.service';


@NgModule({
  imports: [

    // Core modules
    BrowserModule,  // for browser apps
    HttpModule,

    // Common modules
    UIModule,

    // Feature module
    FeaturesModule,

    // Routing
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Resource,
    AuthenticationService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
