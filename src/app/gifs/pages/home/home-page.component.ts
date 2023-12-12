import { Component } from '@angular/core';

import { GifsServicesTsService } from '../../services/gifs.services.ts.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
    

  constructor ( private gitService: GifsServicesTsService){}


  get gifs(): Gif[] {
      return this.gitService.gifList;
  }
}
