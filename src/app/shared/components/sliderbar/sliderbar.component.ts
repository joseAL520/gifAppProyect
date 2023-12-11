import { Component } from '@angular/core';
import { GifsServicesTsService } from 'src/app/gifs/services/gifs.services.ts.service';

@Component({
  selector: 'app-shared-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css']
})
export class SliderbarComponent {

  serviceGif: any [] = [];
  constructor( private gitsService:GifsServicesTsService) { }
  
  get tagsHistory(){
    return this.gitsService.tagsHistory;
  }
    
  buttonGif(){
      
  }

}
