import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "./organism/header/header.component";
import { FooterComponent } from "./organism/footer/footer.component";
import { LoaderComponent } from "./atoms/loader/loader.component";
import { ModalComponent } from "./molecules/modal/modal.component";
import { ButtonComponent } from "./atoms/button/button.component";
import { TranslateModule } from "@ngx-translate/core";
import { LottieAnimationComponent } from './atoms/lottie/lottie-animation.component';
import { LottieComponent } from 'ngx-lottie';

const exportedComponents = [
  HeaderComponent,
  FooterComponent,
  LoaderComponent,
  ModalComponent,
  LottieAnimationComponent,
  ButtonComponent
];

const exportedModules = [
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: [
    ...exportedComponents,
    LottieAnimationComponent,
  ],
  imports: [
    ...exportedModules,
    CommonModule,
    TranslateModule,
    LottieComponent
  ],
  exports: [
    ...exportedComponents,
    ...exportedModules,
    TranslateModule
  ],
  providers: [],
})
export class SharedModule {}
