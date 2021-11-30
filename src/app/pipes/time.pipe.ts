import { Pipe, PipeTransform } from '@angular/core';
import { compareAsc, format, formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(time: string): string {
    return formatDistanceToNow(Date.parse(time), { addSuffix: true });
  }
}
