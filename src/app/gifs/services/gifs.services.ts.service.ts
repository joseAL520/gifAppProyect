import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesTsService {

  private _tagHistory: string[] = []


  constructor() { }

    get tagsHistory(){
      // [ con los corchetes llevamos un registro]
      return [...this._tagHistory];
    }


    searchTag(tag:string){
      this._tagHistory.unshift(tag);
      console.log('service probado',this.tagsHistory);
    }

}
