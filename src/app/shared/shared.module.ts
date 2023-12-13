import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderbarComponent } from './components/sliderbar/sliderbar.component';
import { LaziImageComponent } from './components/lazi-image/lazi-image.component';



@NgModule({
  declarations: [
    SliderbarComponent,
    LaziImageComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    SliderbarComponent,
    LaziImageComponent
  ]
})
export class SharedModule { }
