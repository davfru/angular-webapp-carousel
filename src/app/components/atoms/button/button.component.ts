import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() isDisabled: boolean = false;
  @Input() text: string = "";
  @Input() classes: string = "";
  @Input() isLoading: boolean = false;
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter();

  onClick = () => {
    this.onClickEvent.emit()
  }

}
