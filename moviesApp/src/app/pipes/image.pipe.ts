import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';


const url: string = environment.imgPath; 

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, size: string = 'w500'): string {

    if(!image){
      return './assets/no-image-banner.jpg';
    }

    const urlImage = `${url}/${size}${image}`;
    //console.log(urlImage);
    return urlImage;
  }

}
