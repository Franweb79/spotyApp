import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private _token:string;

  private _headers:HttpHeaders;



  constructor(private _httpClient:HttpClient) {

    this.token="BQBKcKRfTisMUEoIm_wo-XiSoHQY1Yhf-PTVbCbHJuPBOkuhZUceNpc-BWK4euUkPeyFxIzHCBmVtxgC7cc";
    this.headers=new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  getNewReleases()
  {

    const headers=this.headers;

    return this._httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      .pipe( map( (data:any) =>{

        return data.albums.items;
      }));


  }

  getArtista(p_termino:string)
  {
    const headers=this.headers;


    return this._httpClient.get( `https://api.spotify.com/v1/search?q=${p_termino}&type=artist&limit=20`,{headers})
      .pipe( map((res:any)=>{

        return res.artists.items;
      }));
  }


  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }



  get headers(): HttpHeaders {
    return this._headers;
  }

  set headers(value: HttpHeaders) {
    this._headers = value;
  }
}
