import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderbarComponent } from './components/sliderbar/sliderbar.component';



@NgModule({
  declarations: [
    SliderbarComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    SliderbarComponent
  ]
})
export class SharedModule { }
