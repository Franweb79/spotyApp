import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _dataReturned:any[];

  constructor(private _spotify:SpotifyService) {

    this.dataReturned=[];

  }

  ngOnInit() {



       this._spotify.getNewReleases().subscribe((res:any)=>{

         this.dataReturned=res.albums.items;

         //this.dataReturned=res["albums"]["items"];

         console.log(this.dataReturned);

       },(error)=>{

         console.log(error);
       });

  }


  get dataReturned(): any[] {
    return this._dataReturned;
  }

  set dataReturned(value: any[]) {
    this._dataReturned = value;
  }
}
