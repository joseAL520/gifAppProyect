import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-lazi-image',
  templateUrl: './lazi-image.component.html',
})
export class LaziImageComponent implements OnInit{
 
    

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';


  public hasLoaded: boolean = false;

  ngOnInit(): void {
   if(!this.url) throw new Error('URL propety ir requerid.');
  }


  onLoad(){

    setTimeout(()=>{
      this.hasLoaded = true;
    },1000)
  }
}
