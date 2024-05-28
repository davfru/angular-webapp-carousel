import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from "../../../utilities/base-component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent extends BaseComponent {

}
