import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  private _artistId:string;

  private _artistData:any;




  constructor(private _spotify:SpotifyService,
              private _route:ActivatedRoute) {


  }

  ngOnInit() {

    /*get params from route*/
    this._route.params.subscribe((res)=>{
     // console.log(res.id);

      this.artistId=res.id;
    });
    this._spotify.getArtistById(this.artistId)
      .subscribe((res:any)=>{
        this.artistData=res;

        console.log(this.artistData);
      })
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
}
