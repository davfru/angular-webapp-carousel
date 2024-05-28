import { computed, Injectable, signal } from '@angular/core';

export interface AppState {
  data: {},
  isLoading: boolean,
  user?: object | null,
  error?: string,
}

@Injectable({ providedIn: "root" })
export class StateManager {

  appState = signal<AppState>({ isLoading: false, data: {} });

  data = computed(() => this.appState().data);
  isLoading = computed(() => this.appState().isLoading);
  error = computed(() => this.appState().error);

  setState(newState: Partial<AppState>) {
    this.appState.update((state) => {
      return { ...state, ...newState }
    });
  }
}
