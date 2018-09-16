import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private _token:string;




  constructor(private _httpClient:HttpClient) {

    this.token="BQDoBfIzk4234XcXBHZDzTk1hUCA1pyqq_i2ag98wfzJYjyV2HeJcLLsT8HVJjJMyuqDYtpPQqNY8lhNwu0";
  }

  getNewReleases()
  {

    const headers=new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
    });

    return this._httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      .pipe( map( (data:any) =>{

        return data.albums.items;
      }));


  }

  getArtista(p_termino:string)
  {
    const headers=new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

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
}
