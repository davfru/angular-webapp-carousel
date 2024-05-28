import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationLoader, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'lottie-animation',
  templateUrl: './lottie-animation.component.html',
  styleUrls: ['./lottie-animation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LottieAnimationComponent {

  @Input() lottieConfig: AnimationOptions | null = null;
  @Input() mode: 'draw' | 'layer' = 'draw';
  @Input() height: string = '200';
  @Input() width: string = '200';
  @Output() onLoopEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCompleteEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  onSegmentStart(): void {
    console.log("onSegmentStart")
  }

  onComplete(): void {
    console.log("onComplete")
    if (this.onCompleteEvent)
      this.onCompleteEvent.emit();
  }

  onLoopComplete(): void {
    console.log("onLoopComplete")
    if (this.onLoopEvent)
      this.onLoopEvent.emit();
  }

}