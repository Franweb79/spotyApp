import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {HttpHeaders} from '@angular/common/http';


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


    /*first we generate the token, then when response is positive,

     */
    this._spotify.getTokenFromBackEnd().subscribe((res:any)=>{

      this._spotify.token=res.access_token;

      this._spotify.headers=new HttpHeaders({
        'Authorization': `Bearer ${this._spotify.token}`
      });

      //get new releases once token and headers are generated
      this._spotify.getNewReleases().subscribe((res:any)=>{

        this.dataReturned=res;

        //this.dataReturned=res["albums"]["items"];

        console.log(this.dataReturned);

      },(error)=>{

        console.log(error);
      });


      console.log (this._spotify.token);
    },(err)=>{

      console.log (err);
    });





  }



  get dataReturned(): any[] {
    return this._dataReturned;
  }

  set dataReturned(value: any[]) {
    this._dataReturned = value;
  }
}
