import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actualmenteExp'
})
export class ActualmenteExpPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value == null){
      return 'ACTUALMENTE'
    } else{
      return value
    }
  }

}
