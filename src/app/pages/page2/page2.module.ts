import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2ComponentRoutingModule } from "./page2-routing.module";
import { SharedModule } from "../../components/shared.module";
import { Page2Component } from "./page2.component";

@NgModule({
  declarations: [
    Page2Component
  ],
  imports: [
    CommonModule,
    Page2ComponentRoutingModule,
    SharedModule
  ]
})
export class Page2ComponentModule { }
