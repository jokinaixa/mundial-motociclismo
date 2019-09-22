import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distinct'
})
export class DistinctPipe implements PipeTransform {

  transform(value: any, arg?: any): any {

    if (!value || value === undefined || value.length === 0) return null;
    
    const curr = value.map(data => eval('data.' + arg));
    const currencies = curr.filter((x:any, i:any, a:any) => x && a.indexOf(x) === i);

    return new Set(currencies);
  }

}
