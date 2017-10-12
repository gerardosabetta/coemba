import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value: any, term:any) {
    if (term === '') return value

    return value.map(
      value => value.filter(
        value => value.name.toLowerCase().includes(term.toLowerCase())
      )
    )
  }
}