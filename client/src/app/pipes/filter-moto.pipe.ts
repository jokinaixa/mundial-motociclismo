import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMoto'
})
export class FilterMotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const resultEquipo = [];

    for (const equipo of value) 
    {
      if (args.length > 0)
      {
        for (const arg of args) 
        {
          //console.log(equipo.moto + ' -> ' + arg);

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
