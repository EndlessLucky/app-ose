import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'OseDefaultImg'
})
export class OseDefaultImgPipe implements PipeTransform {

  transform(url: string): string {
    return url ? url : 'assets/img-not-found.png';
  }

}
