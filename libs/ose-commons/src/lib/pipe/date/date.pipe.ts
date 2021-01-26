import { Pipe, PipeTransform } from '@angular/core';
import { dayJs } from '../../utils';

@Pipe({
  name: 'OseDate',
  pure: false
})
export class OseDatePipe implements PipeTransform {

  transform(value: any, format?: string): string {
    return dayJs(value).format(format);
  }

}
