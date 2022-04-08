import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterImage'
})
export class FilterImagePipe implements PipeTransform {

  transform(movies:any[]): any[] {
    return movies.filter(peli=>{
      return peli.backdrop_path;
    });
  }

}
