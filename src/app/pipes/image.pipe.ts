import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(arrayImagenes: any[], p_index:number): string {

    if(!arrayImagenes)/*si es null, undefined...*/
    {
      /*path is so, because we have to think that app will run on index.html, so path is
      taking that into account
       */
      return 'assets/img/no_image_available.jpg';
    }

    if(arrayImagenes.length>0)
    {
      return arrayImagenes[p_index].url;
    }else{ /*si viene arreglo, pero viene sin posiciones, o vacio -que los hay-, etc*/
      return 'assets/img/no_image_available.jpg';
    }

  }

}
