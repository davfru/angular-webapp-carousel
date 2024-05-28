import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../utilities/base-component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {
  
  constructor() {
    super();
  }
  
  ngOnInit(): void {
  
  }
    
}
  