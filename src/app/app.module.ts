import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestauComponent } from './Restaurants/pages/restau/restau.component';
import { RestauTableComponent } from './Restaurants/components/restau-table/restau-table.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailComponent } from './Restaurants/pages/detail/detail.component';
import { YellowDirective } from './shared/directives/yellow.directive';
import { RestauFormComponent } from './Restaurants/components/restau-form/restau-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RestauComponent,
    RestauTableComponent,
    DetailComponent,
    YellowDirective,
    RestauFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
