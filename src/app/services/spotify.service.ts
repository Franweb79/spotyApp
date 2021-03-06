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

   /* this.getTokenFromBackEnd().subscribe((res:any)=>{

      this.token=res.access_token;

      this.headers=new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });

      console.log (this.token);
    },(err)=>{


    });

*/

    //this.token="BQAyVLyJ7QM64yZaxueNERynOSvw7l5WCGXHBJ2loZ0LWhRALylvbLug1A64W2TVOA2V2hF7T-YcebJSUms";
    /*this.headers=new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });*/
  }

  /*to make request on other methods on a more efficient way*/
  getRequestUrl(query :string)
  {
    const url="https://api.spotify.com/v1/";

    return `${url}${query}`;
  }

  getNewReleases()
  {




    const headers=this.headers;

    return this._httpClient.get(this.getRequestUrl("browse/new-releases"),{headers})
      .pipe( map( (data:any) =>{

        return data.albums.items;
      }));


  }

  getArtista(p_termino:string)
  {
    const headers=this.headers;


    return this._httpClient.get( this.getRequestUrl(`search?q=${p_termino}&type=artist&limit=20`),{headers})
      .pipe( map((res:any)=>{

        return res.artists.items;
      }));
  }

  getArtistById(p_artistId:string)
  {
    const headers=this.headers;

    return this._httpClient.get( this.getRequestUrl(`artists/${p_artistId}`),{headers});

  }

  /*to get tracks, we must use a country too*/
  getTopTracks(p_artistId:string,p_countryId:string)
  {
    const headers=this.headers;

    return this._httpClient.get( this.getRequestUrl(`artists/${p_artistId}/top-tracks?country=${p_countryId}`),{headers})
      .pipe(map( (res:any) =>{
        return res.tracks;
      }));
  }


  getTokenFromBackEnd(){

    /*'http://localhost:8080/get-token'*/
    return this._httpClient.get('https://spotiapp-node-backend.herokuapp.com/get-token');
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
