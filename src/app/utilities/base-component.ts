import { inject } from '@angular/core';
import { StateManager } from "../services/state-manager/state-manager.service";

export class BaseComponent {

  stateManager = inject(StateManager);

  showLoader() {
    this.stateManager.setState({isLoading: true})
  }

  hideLoader() {
    this.stateManager.setState({isLoading: false})
  }

}
