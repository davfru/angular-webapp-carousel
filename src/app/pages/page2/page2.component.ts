import { Component, OnInit } from '@angular/core';
import { BaseComponent } from "../../utilities/base-component";
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component extends BaseComponent implements OnInit {
 
  constructor() {
    super();
  }
  
  ngOnInit(): void {
  
  }
  
}
  