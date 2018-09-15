import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient:HttpClient) { }

  getNewReleases()
  {

    const headers=new HttpHeaders({
        'Authorization': 'Bearer BQBOEj0a4EfVQ2LecQoGtkfc993rjGE9idqCEeWXf3tI-m_7UUuVenoxdLL68JcCg38wrQgyrzEUrM4P0CQ'
    });

    this._httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      .subscribe(res=>{

        console.log (res);
      },error=>{

        console.log (error);
      })
  }
}
