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
        'Authorization': 'Bearer BQCUrbm2rBJuK-mSfjMExg3sGqwwjhx75wsCcMGVwbZCqEMzl-pB-yYn0BBJa3delbNmafQEsjuU8oXjK_U'
    });

    return this._httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers});

  }
}
