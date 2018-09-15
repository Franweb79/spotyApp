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
        'Authorization': 'Bearer BQDtdQ-823ZaZpC90w2SvAW9KxK6hAYhKfzW72dromPTjfTXiSYVJbGvzXzyd3mGd27LEVfVtW2ySg4NX54'
    });

    return this._httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers});

  }
}
