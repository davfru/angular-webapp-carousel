import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentRoutingModule } from "./home-routing.module";
import { SharedModule } from "../../components/shared.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeComponentRoutingModule,
    SharedModule
  ]
})
export class HomeComponentModule { }
