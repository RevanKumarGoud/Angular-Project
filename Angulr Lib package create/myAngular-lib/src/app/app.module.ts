import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{MydemoLibModule } from 'mydemo-lib'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MydemoLibModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
