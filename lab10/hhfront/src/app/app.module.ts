import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './companyserver';

@NgModule({
  declarations: [
   // AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule 
  ],
  providers: [DataService], 

})
export class AppModule { }
