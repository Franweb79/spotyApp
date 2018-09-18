import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {


  @Input() dataReturned:any[];

  private _artistId:string;

  constructor(private _router:Router) { }

  ngOnInit() {
  }


  /*we first get the id -stored on diffrente posiitons of the response depending on type is album or artist)
  then we redirect to the component with that id ah query parameter
   */
  showArtist(dataReceived)
  {
    if(dataReceived.type=="artist")
    {
      this.artistId=dataReceived.id;
    }else if(dataReceived.type=="album"){
      this.artistId=dataReceived.artists[0].id;
    }

    //console.log(this.artistId);

    this._router.navigate(['artist',this.artistId]);

  }

  get artistId(): string {
    return this._artistId;
  }

  set artistId(value: string) {
    this._artistId = value;
  }

}
