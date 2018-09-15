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
        'Authorization': 'Bearer BQDFnR4EWnb4sNbc8Y6YZcM32KFYDSlNEIqib_69HejZCkdRIBo26QRaRaot_lXzugg37t_C-spzu95MfEc'
    });

    return this._httpClient.get('https://api.spotify.com/v1/browse/new-releases',{headers});

  }
}
