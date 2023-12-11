import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-boxcomponet',
    template: `
            <h5>Search:</h5>
            <input type="text" class="form-control" placeholder="search gif" (keyup.enter)="searchTag()" #txtTagInput> `
    
})

export class SearchBoxComponent  {
    
@ViewChild('txtTagInput')
public tagInput!: ElementRef<HTMLInputElement>; 
    
    constructor() { }
    

    searchTag(){
        const newTag = this.tagInput.nativeElement.value;
            console.warn(newTag);

    }
}