import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPiloto'
})
export class FilterPilotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value || value === undefined || value.length === 0) return null;
    const resultPiloto = [];

    for (const piloto of value) 
    {
      if (args.length > 0)
      {
        for (const arg of args) 
        {
          if (piloto.equipo.nombre.indexOf(arg) > -1)
          {
            resultPiloto.push(piloto);
          }
        }
      }
      else
      {
        resultPiloto.push(piloto);
      }
    } 

    return resultPiloto;
  }

}
