import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeLineBreaks'
})
export class RemoveLineBreaksPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace( /\n/g, '');
  }

}
