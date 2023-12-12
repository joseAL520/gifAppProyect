import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesTsService {
  public gifList: Gif[] = []
  private apiKey: string = 'LLugYix2SC9HB7QTkJF9fo1h4XPSYQkY';    
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';
  private _tagHistory: string[] = []

  

  constructor(private http: HttpClient) { }

    get tagsHistory(){
      // [ con los corchetes llevamos un registro]
      return [...this._tagHistory];
    }


  private orgaizeHistory(tag:string){
    tag = tag.toLowerCase();
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter( (oldTag) => oldTag !== tag )
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);
  }


  searchTag(tag:string):void{
      if(tag.length === 0) return;
      this.orgaizeHistory(tag);

      const params = new HttpParams()
                    .set('api_key',this.apiKey)
                    .set('limit',10)
                    .set('q',tag)
      this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
                    .subscribe(resp => {
                      this.gifList = resp.data
                          console.log({gifs: this.gifList});
                         
                    })
      
    }

}
