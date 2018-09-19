import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  private _artistId:string;

  private _artistData:any;

  private _artistTopTracks:any;





  constructor(private _spotify:SpotifyService,
              private _route:ActivatedRoute,
              private _domSan:DomSanitizer) {


  }

  ngOnInit() {



    /*get params from route*/
    this._route.params.subscribe((res)=>{
     // console.log(res.id);

      this.artistId=res.id;
    });

    /*get token, when token is ok, get artist and its top tracks*/
    this._spotify.getTokenFromBackEnd().subscribe((res:any)=> {

      this._spotify.token = res.access_token;

      this._spotify.headers = new HttpHeaders({
        'Authorization': `Bearer ${this._spotify.token}`
      });

      /*get artist*/
      this._spotify.getArtistById(this.artistId)
        .subscribe((res:any)=>{
          this.artistData=res;

          //console.log(this.artistData);
        })

      /*get top tracks*/

      this._spotify.getTopTracks(this.artistId,"ES").
      subscribe( (topTracks:any)=>{

        this.artistTopTracks=topTracks;

        console.log(this.artistTopTracks);
      });

    });



  }//oninit


  /*type can be track, artist, album... and its corresponding id"*/
  setWidgetPath(p_type:string,p_type_id:string)
  {
    const url="https://open.spotify.com/embed";

    const all=`${url}/${p_type}/${p_type_id}`;

    /*if i dont santize, throws an error*/

    /*(last solution --> https://stackoverflow.com/questions/47193997/im-trying-to-dynamically-change-the-url-of-an-iframe-but-im-getting-an-error-un*/


    const sanitizedUrl=this._domSan.bypassSecurityTrustResourceUrl(all);

    return sanitizedUrl;
  }



  get artistId(): string {
    return this._artistId;
  }

  set artistId(value: string) {
    this._artistId = value;
  }


  get artistData():any {
    return this._artistData;
  }

  set artistData(value:any) {
    this._artistData = value;
  }



  get artistTopTracks(): any[] {
    return this._artistTopTracks;
  }

  set artistTopTracks(value: any[]) {
    this._artistTopTracks = value;
  }



}
