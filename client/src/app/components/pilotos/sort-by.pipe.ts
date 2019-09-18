import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<any>, args: string): Array<any> {
    console.log(array);
    console.log(args);

    if (!array || array === undefined || array.length === 0) return null;

    array.sort((a: any, b: any) => {
      console.log(a[args]);
      console.log(b[args]);

      // ordenamos la lista segun la columna legendIndex en el orden inverso
      //const newSeries = datosConsumos.graficoConsumos.serieConsumo.sort((con1: any, con2: any) => !('' + con1.legendIndex).localeCompare(con2.legendIndex));
      //const newSeries = $filter('orderBy')(datosConsumos.graficoConsumos.serieConsumo, 'legendIndex', true);      

      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }

}
