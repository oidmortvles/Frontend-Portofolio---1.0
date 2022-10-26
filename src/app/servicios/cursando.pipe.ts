import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cursando'
})
export class CursandoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (value == true) ? 'EN CURSO' : 'FINALIZADO';
  }

}
