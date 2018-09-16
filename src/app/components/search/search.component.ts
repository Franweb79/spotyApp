import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  private _ArrayArtistasConEsosTerminos:any[];

  constructor(private _spotify:SpotifyService) {

    this.ArrayArtistasConEsosTerminos=[];
  }

  ngOnInit() {
  }

  buscar(p_buscador_value:string)
  {
    //console.log (p_buscador_value);

    this._spotify.getArtista(p_buscador_value)
      .subscribe((res:any)=>{

        this.ArrayArtistasConEsosTerminos=res;
        console.log (res);

      },(error)=>{

        console.log("no");
        console.log (error);
      });
  }

  get ArrayArtistasConEsosTerminos(): any[] {
    return this._ArrayArtistasConEsosTerminos;
  }

  set ArrayArtistasConEsosTerminos(value: any[]) {
    this._ArrayArtistasConEsosTerminos = value;
  }

}
