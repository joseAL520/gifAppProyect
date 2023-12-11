import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServicesTsService } from '../../services/gifs.services.ts.service';

@Component({
    selector: 'gifs-search-boxcomponet',
    template: `
            <h5>Search:</h5>
            <input type="text" class="form-control" placeholder="search gif" (keyup.enter)="searchTag()" #txtTagInput> `
    
})

export class SearchBoxComponent  {
    
@ViewChild('txtTagInput')
public tagInput!: ElementRef<HTMLInputElement>; 
    
    constructor( private gitsService:GifsServicesTsService) { }
    

    searchTag(){
        const newTag = this.tagInput.nativeElement.value;
        this.gitsService.searchTag(newTag);
        this.tagInput.nativeElement.value='';
    }
}