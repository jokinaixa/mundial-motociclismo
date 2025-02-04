import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMoto'
})
export class FilterMotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value || value === undefined || value.length === 0) return null;
    const resultEquipo = [];

    for (const equipo of value) 
    {
      if (args.length > 0)
      {
        for (const arg of args) 
        {
          if (equipo.moto.indexOf(arg) > -1)
          {
            resultEquipo.push(equipo);
          }
        }
      }
      else
      {
        resultEquipo.push(equipo);
      }
    } 

    return resultEquipo;
  }

}
