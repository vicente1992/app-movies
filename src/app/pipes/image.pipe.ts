import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string): string {
    if (image) {
      return `https://image.tmdb.org/t/p/w342${image}`;
    }
    return 'assets/image/noimage.png';
  }

}
