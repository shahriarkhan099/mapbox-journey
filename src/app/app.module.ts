import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapboxComponent } from './mapbox0/mapbox.component';
import { Mapbox1Component } from './mapbox1/mapbox1.component';

@NgModule({
  declarations: [AppComponent, MapboxComponent, Mapbox1Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
