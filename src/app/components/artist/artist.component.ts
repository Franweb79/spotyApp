import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
              private _route:ActivatedRoute) {


  }

  ngOnInit() {

    /*get params from route*/
    this._route.params.subscribe((res)=>{
     // console.log(res.id);

      this.artistId=res.id;
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
  }//oninit




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
