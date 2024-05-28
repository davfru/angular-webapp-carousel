import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from "../../../utilities/base-component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent extends BaseComponent {

  constructor(private translateService: TranslateService) {
    super();
  }

  changeLang(lang: 'it' | 'en') {
    this.translateService.setDefaultLang(lang);
  }
}
