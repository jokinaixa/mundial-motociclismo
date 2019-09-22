import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value || value === undefined || value.length === 0) return null;

    value.sort((a: any, b: any) => {
      // ordenamos la lista segun la columna legendIndex en el orden inverso
      //const newSeries = datosConsumos.graficoConsumos.serieConsumo.sort((con1: any, con2: any) => !('' + con1.legendIndex).localeCompare(con2.legendIndex));
      ////const newSeries = $filter('orderBy')(datosConsumos.graficoConsumos.serieConsumo, 'legendIndex', true);      

      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });

    return value;
  }

}
