import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestauComponent} from "./Restaurants/pages/restau/restau.component";
import {DetailComponent} from "./Restaurants/pages/detail/detail.component";

const routes: Routes = [

  { path: '', component: RestauComponent },
  { path: 'detail/:param', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
