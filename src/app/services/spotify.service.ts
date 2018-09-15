import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private _token:string;




  constructor(private _httpClient:HttpClient) {

    this.token="BQDvxxjW1bsogEyj_W9-u1o7wODrqBney_9a8cqST51diYYfN9TBCm9ZIsHzx7ZmbvhIKkSFokf0f_eh4xI";
  }

  getNewReleases()
  {

    const headers=new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
    });

    return this._httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers});

  }

  getArtista(p_termino:string)
  {
    const headers=new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this._httpClient.get( `https://api.spotify.com/v1/search?q=${p_termino}&type=artist&limit=20`,{headers});
  }


  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
