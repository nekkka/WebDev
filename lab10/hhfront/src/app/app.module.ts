import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Router, Routes } from '@angular/router';
import { DataService } from './companyserver';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, HttpClientModule, Router
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
