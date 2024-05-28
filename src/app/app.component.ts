import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StateManager } from "./services/state-manager/state-manager.service";
import { BaseComponent } from "./utilities/base-component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'codedincloud';

  showModal = false;

  constructor(private stateService: StateManager) {
    super();
  }

  ngOnInit(): void {
  }

  onContinue() {
    // Gestisci l'azione di continuazione qui
    this.showModal = false;
  }

  onCancel() {
    // Gestisci l'azione di cancellazione qui
    this.showModal = false;
  }

  customAction() {
    // Gestisci l'azione personalizzata qui
    this.showModal = false;
  }
}
