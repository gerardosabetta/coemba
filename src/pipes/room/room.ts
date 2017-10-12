import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
@Pipe({
  name: 'room',
})
export class RoomPipe implements PipeTransform {
  transform(value: Observable<any>, room:string) {
    return value.map(
      value => value.filter(
        value => (value.location == room && !value.moving)
      )
    )
  }
}
