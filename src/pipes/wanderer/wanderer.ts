import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
@Pipe({
  name: 'wanderer',
})
export class WandererPipe implements PipeTransform {
  transform(value: Observable<any>, goingTo:string) {
    return value.map(
      value => value.filter(
        value => (value.goingTo == goingTo && value.moving)
      )
    )
  }
}
