import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit, OnChanges {

  @Input() 
  imageData: string[] = []

  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  @ViewChild('imageDisplay') imageDisplay!: ElementRef<HTMLDivElement>;

  private RADIUS = 1400;
  private ITEM_SHIFT = 100;
  private animId: number = 0;
  private angleUnit: number = 0;
  private rotateAngle: number = 0;
  private viewAngle: number = 0;
  private mouseX: number = 0;
  private mouseY: number = 0;

  ngAfterViewInit() {
    this.setupCarousel();
    this.startAnimation();
  }

  ngOnChanges() {
    if (this.carousel) {
      this.setupCarousel();
    }
  }

  trackByFn(index: any, item: any): any {
    return index;  
  }

  setupCarousel() {
    this.angleUnit = 360 / this.imageData.length;
    this.mouseX = this.mouseY = 0;
    this.rotateAngle = 0;
    this.viewAngle = 0;

    const items = this.carousel.nativeElement.children;

    for (let i = 0; i < items.length; i++) {
      
      const item = items[i] as HTMLDivElement;
      const itemAngle = this.angleUnit * i;
      const itemAngleRad = itemAngle * Math.PI / 180;
      const ypos = Math.sin(itemAngleRad) * this.RADIUS;
      const zpos = Math.cos(itemAngleRad) * this.RADIUS;
      const ypos1 = Math.sin(itemAngleRad) * (this.RADIUS + this.ITEM_SHIFT);
      const zpos1 = Math.cos(itemAngleRad) * (this.RADIUS + this.ITEM_SHIFT);

      item.style.transform = `translateY(${ypos}px) translateZ(${zpos}px) rotateX(${-itemAngle}deg)`;

      item.onmouseover = () => {
        item.style.transform = `translateY(${ypos1}px) translateZ(${zpos1}px) rotateX(${-itemAngle}deg)`;
      };
      
      item.onmouseout = () => {
        item.style.transform = `translateY(${ypos}px) translateZ(${zpos}px) rotateX(${-itemAngle}deg)`;
      };
      
    }
  }

  startAnimation() {

    cancelAnimationFrame(this.animId);

    const updateFrame = () => {
      this.rotateAngle += this.mouseY;
      this.viewAngle += (this.mouseX - this.viewAngle) * 0.05;
      this.carousel.nativeElement.style.transform = `translateZ(-1500px) rotateY(${-this.viewAngle}deg) rotateX(${this.rotateAngle}deg)`;
      this.animId = requestAnimationFrame(updateFrame);
    };

    updateFrame();

    document.body.onmousemove = (e: MouseEvent) => {
      this.mouseX = ((e.clientX / innerWidth) - 0.5) * 10;
      this.mouseY = ((e.clientY / innerHeight) - 0.5) * 1.25;
    };
  }

  pickImage(imgUrl: string) {
    this.imageDisplay.nativeElement.style.backgroundImage = `url(${imgUrl})`;
    this.imageDisplay.nativeElement.style.transform = 'scale(1, 1)';
  }

  closeImage() {
    this.imageDisplay.nativeElement.style.transform = 'scale(0.0, 0.0)';
  }
}
