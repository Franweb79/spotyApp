import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _dataReturned:any;

  constructor(private _spotify:SpotifyService) { }

  ngOnInit() {

      this.assign().then((result)=>{

        this.dataReturned=result["albums"]["items"];

        console.log (this.dataReturned);

        },(error)=>{
          console.log ("error");
      });

  }

  get dataReturned(): any {
    return this._dataReturned;
  }

  set dataReturned(value: any) {
    this._dataReturned = value;
  }

  assign()
  {
    return new Promise((resolve,reject)=>{

      this._spotify.getNewReleases().subscribe((res)=>{

        resolve(res);

      },(error)=>{

        reject(error);

      });




    });
  }
}
