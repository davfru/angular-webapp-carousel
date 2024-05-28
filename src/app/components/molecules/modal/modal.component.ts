import { Component, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() showModal: boolean = false;
  @Output() continueClicked: EventEmitter<any> = new EventEmitter();
  @Output() onCloseEvent: EventEmitter<any> = new EventEmitter();

  onContinue() {
    this.continueClicked.emit();
    this.closeModal();
  }

  onClose() {
    this.closeModal();
  }

  onOutsideClick() {
    this.closeModal();
  }

  closeModal() {
    this.onCloseEvent.emit(false);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKeydown(event: KeyboardEvent) {
    this.closeModal();
  }
}
