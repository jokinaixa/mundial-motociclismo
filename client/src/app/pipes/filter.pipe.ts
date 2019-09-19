import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;

    const resultPiloto = [];

    for (const piloto of value) {
      const completo = piloto.nombre + ' ' + piloto.apellido;
      
      if (completo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPiloto.push(piloto);
      }
    }

    return resultPiloto;
  }

}
